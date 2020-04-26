import React, { useState, createContext } from 'react'

export const AppContext = createContext({
  loggedInUser: ''
})

export const AppState = ({ children }) => {
  /*
    States used in the context
  */
  const [loggedInUser, setLoggedInUser] = useState('')
  const [showSignup, setSignupFlag] = useState('')
  const [signupError, setSignupErrorFlag] = useState(false)
  const [signinError, setSigninErrorFlag] = useState(false)
  const [emails, setEmails] = useState([])
  const [sentMails, setSentMails] = useState([])
  const [inboxFlag, setInboxFlag] = useState(true)

  const getMailsForLoggedInUser = name => {
    const users = JSON.parse(localStorage.getItem('mailers'))
    let index = findUser(users, {mail:name})
    const user = users[index]
    const mappings = JSON.parse(localStorage.getItem('mappings'))
    const inboxIds = {}
    const sentIds = {}
    for (const mapping of mappings) {
      if ((mapping.type === 'CC' || mapping.type === 'Rec') && mapping.userId === user.id) {
        inboxIds[mapping.msgId] = mapping.msgId
      } else if (mapping.type === 'Sen' &&  mapping.userId === user.id) {
        sentIds[mapping.msgId] = mapping.msgId
      }
    }
    const mails = JSON.parse(localStorage.getItem('emailList'))
    const inboxMails = []
    const sentboxMails = []
    for (const mail of mails) {
      if (inboxIds[mail.id]) {
        let fromId = ''
        for (const mapping of mappings) {
          if (mapping.msgId === mail.id && mapping.type === 'Sen') {
            fromId = mapping.userId
            break
          }
        }
        let sender = ''
        for (const user of users) {
          if (user.id === fromId) {
            sender = user.mail
          }
        }
        inboxMails.push({
          ...mail,
          sender
        })
      } else if (sentIds[mail.id]) {
        let toIds = {}
        for (const mapping of mappings) {
          if (mapping.msgId === mail.id && (mapping.type === 'CC' || mapping.type === 'Rec')) {
            toIds[mapping.userId] = mapping.userId
          }
        }
        let receiver = []
        for (const user of users) {
          if (toIds[user.id]) {
            receiver.push(user.mail)
          }
        }
        sentboxMails.push({
          ...mail,
          receiver
        })
      }
    }

    inboxMails.sort((a, b) => {
      return b.time - a.time
    })

    sentboxMails.sort((a, b) => {
      return b.time - a.time
    })
    setEmails(inboxMails)
    setSentMails(sentboxMails)
  }

  const findUser = (users, creds) => {
    let foundAt
    for (let index = 0; index < users.length; index++) {
      if (users[index].mail === creds.mail) {
        foundAt = index
        break;
      }
    }
    return foundAt
  }

  const authenticateUser = creds => {
    let users = window.localStorage.getItem('users')
    users = users ? JSON.parse(users) : []
    let count = 0
    if (users.length) {
      const index = findUser(users, creds)
      count = Number.isFinite(index) ? 1 : 0
      if (count > 0 && users[index].password !== creds.password) {
        setSigninErrorFlag(true)
        setLoggedInUser('')
        window.localStorage.removeItem('username')
        return
      }
    }
    if (count === 0) {
      setSignupFlag(true)
      setLoggedInUser('')
      window.localStorage.removeItem('username')
      return
    }
    setLoggedInUser(creds.mail)
    window.localStorage.setItem('username', creds.mail)
  }

  const createUser = username => {
    let mailers = window.localStorage.getItem('mailers')
    mailers = mailers ? JSON.parse(mailers) : []
    const index = findUser(mailers, {mail: username})
    let returnVal = ''
    if (!mailers.length || (mailers.length && !Number.isFinite(index))) {
      const entry = {
        mail: username
      }
      let id = mailers[mailers.length - 1] ? mailers[mailers.length - 1].id : 0
      entry.id = parseInt(id) + 1
      window.localStorage.setItem('mailers', JSON.stringify(mailers.concat(entry)))
      returnVal =  entry.id
    } else {
      returnVal = Number.isFinite(index) ? mailers[index].id : ''
    }
    return returnVal
  }

  const createMail = mail => {
    let emailList = window.localStorage.getItem('emailList')
    emailList = emailList ? JSON.parse(emailList) : []
    let id = emailList[emailList.length - 1] ? emailList[emailList.length - 1].id : 0
    const entry = {...mail}
    entry.id = parseInt(id) + 1
    window.localStorage.setItem('emailList', JSON.stringify(emailList.concat(entry)))
    return entry.id
  }


  const signupUser = creds => {
    let users = window.localStorage.getItem('users')
    users = users ? JSON.parse(users) : []
    let count = 0
    if (users.length) {
      const index = findUser(users, creds)
      count = Number.isFinite(index) ? 1 : 0
    }
    if (count === 0) {
      window.localStorage.setItem('users', JSON.stringify(users.concat(creds)))
      setLoggedInUser(creds.mail)
      window.localStorage.setItem('username', creds.mail)
    } else {
      setSignupErrorFlag(true)
      setLoggedInUser('')
      window.localStorage.removeItem('username')
    }
  }

  const createMappings = mapping => {
    let mappings = window.localStorage.getItem('mappings')
    mappings = mappings ? JSON.parse(mappings) : []
    window.localStorage.setItem('mappings', JSON.stringify(mappings.concat(mapping)))
  }

  const sendEmail = payload => {
    const {
      receivers,
      ccReceivers,
      subject,
      content
    } = payload

    const msgId = createMail({
      subject,
      content,
      time: (new Date()).getTime(),
    })

    for (const receiver of receivers) {
      const userId = createUser(receiver)
      createMappings({msgId, userId, type:'Rec'})
    }
    for (const ccReceiver of ccReceivers) {
      const userId = createUser(ccReceiver)
      createMappings({msgId, userId, type:'CC'})
    }
    createMappings({msgId, userId: createUser(loggedInUser), type: 'Sen'})
    getMailsForLoggedInUser(loggedInUser)
  }

  return (
    <AppContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        authenticateUser,
        showSignup,
        setSignupFlag,
        signupUser,
        signinError,
        signupError,
        setSigninErrorFlag,
        setSignupErrorFlag,
        sendEmail,
        emails,
        setEmails,
        getMailsForLoggedInUser,
        sentMails,
        inboxFlag,
        setInboxFlag
      }}
    >
      {children}
    </AppContext.Provider>
  )
}