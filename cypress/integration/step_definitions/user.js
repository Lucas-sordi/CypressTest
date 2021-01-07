import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import User from '../../services/user.service'
import users from '../../fixtures/factory.js'


//GET ----------------------------------------------------------------------------------

When(`search for a single user with the id {int}`, id => {
  User.get_user(id).then(res => {
    cy.log('RESPONSE: ' + JSON.stringify(res.body))
    cy.wrap({ res, expectedId: id }).as('response')
  })
})

Then(`should return status {int}`, (status) => {
  cy.get('@response').then(when => {
    expect(when.res.status).to.eq(status)
  })
})

Then(`should return the correct id`, () => {
  cy.get('@response').then(when => {
    expect(when.res.body.id).to.eq(when.expectedId)
  })
})







//POST ----------------------------------------------------------------------------------

When(`create a new user with {int} and {string} and {string}`, (id, userName, password) => {
  User.post_user({id, userName, password}).then(res => {
    cy.log('RESPONSE: ' + JSON.stringify(res.body))
    cy.wrap({ res, expecteduser: userName }).as('response')
  })
})

Then(`should return status {int}`, (status) => {
  cy.get('@response').then(when => {
    expect(when.res.status).to.eq(status)
  })
})

Then(`should return the correct username`, () => {
  cy.get('@response').then(when => {
  expect(when.res.body.userName).to.eq(when.expecteduser)
  })
})






//PUT ------------------------------------------------------------------------------------

When(`update a user with {int} and {string} and {string}`, (id, newuser, newpass) => {
  User.put_user(id, {id : id, userName : newuser, password : newpass}).then(res => {
    cy.log('RESPONSE: ' + JSON.stringify(res.body))
    cy.wrap({ res }).as('response')
  })
})

Then(`should return status {int}`, (status) => {
  cy.get('@response').then(when => {
    expect(when.res.status).to.eq(status)
  })
})

Then(`should return the correct new username`, () => {
  cy.get('@response').then(when => {
    expect(when.res.body.userName).to.eq("Novonome")
  })
})







//DELETE ----------------------------------------------------------------------------------

When(`delete a user with {int}`, id => {
  User.delete_user(id).then(res => {
    cy.log('RESPONSE: ' + JSON.stringify(res.body))
    cy.wrap({ res }).as('response')
  })
})

Then(`should return status {int}`, (status) => {
  cy.get('@response').then(when => {
    expect(when.res.status).to.eq(status)
  })
})






//POST random----------------------------------------------------------------------------------

When(`create a new random user with {int}`, userid => {
  var novousuario = new users.randomUser()
  novousuario.id = userid
  User.post_user(novousuario).then(res => {
    cy.log('RESPONSE: ' + JSON.stringify(res.body))
    cy.wrap({ res, expecteduser: novousuario.userName }).as('response')
  })
})

Then(`should return status {int}`, (status) => {
  cy.get('@response').then(when => {
    expect(when.res.status).to.eq(status)
  })
})

Then(`should return the correct user`, () => {
  cy.get('@response').then(when => {
  expect(when.res.body.userName).to.eq(when.expecteduser)
  })
})