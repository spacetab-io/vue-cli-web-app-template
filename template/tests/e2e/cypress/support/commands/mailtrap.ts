/* eslint-disable class-methods-use-this */
const FIXTURES_PATH = 'cypress/fixtures/mailtrap';

declare namespace Cypress {
	interface Chainable<Subject = Mailtrap> {
		mailtrap(): Cypress.Chainable<Mailtrap>;
	}
}

interface MailtrapOptionsInterface {
  API_URL: string;
  API_TOKEN: string;
}

export class Mailtrap {

  static FIXTURES_PATH = FIXTURES_PATH;
  API_URL: string;
  API_TOKEN: string;

  constructor(options: MailtrapOptionsInterface) {
    this.API_URL = options.API_URL;
    this.API_TOKEN = options.API_TOKEN;
  }

  static commands() {
    return [
      Symbol('resetEmailUsername'),
      Symbol('getInboxMessages'),
    ];
  }

  getFixturesPath() {
    return cy.wrap(Mailtrap.FIXTURES_PATH);
  }

  /**
   * @see https://mailtrap.docs.apiary.io/#reference/user/apiv1user/get
   */
  userGet() {
    return cy.request({
      url: `${this.API_URL}/api/v1/user`,
      headers: {
        'Api-Token': this.API_TOKEN,
      },
      failOnStatusCode: false,
    });
  }

  /**
   * @see https://mailtrap.docs.apiary.io/#reference/inbox/apiv1inboxes/get
   */
  inboxesGet() {
    return cy.request({
      url: `${this.API_URL}/api/v1/inboxes`,
      headers: {
        'Api-Token': this.API_TOKEN,
      },
      failOnStatusCode: false,
    });
  }

  /**
   * @see https://mailtrap.docs.apiary.io/#reference/inbox/apiv1inboxesid/get
   * @param {number} id - Inbox ID
   */
  inboxesById(id: number) {
    return cy.request({
      url: `${this.API_URL}/api/v1/inboxes/${id}`,
      headers: {
        'Api-Token': this.API_TOKEN,
      },
      failOnStatusCode: false,
    });
  }

  /**
   * @see https://mailtrap.docs.apiary.io/#reference/message/apiv1inboxesinboxidmessagessearchpagelastid/get
   * @param {number} id - Inbox ID
   */
  getInboxMessages(id: number) {
    // ?search=&page=1&last_id=
    return cy.request({
      url: `${this.API_URL}/api/v1/inboxes/${id}/messages`,
      headers: {
        'Api-Token': this.API_TOKEN,
      },
      failOnStatusCode: false,
    });
  }

  /**
   * @see https://mailtrap.docs.apiary.io/#reference/inbox/apiv1inboxesinboxidclean/patch
   * @param {number} id - Inbox ID
   */
  cleanInboxes(id: number) {
    return cy.request({
      method: 'PATCH',
      url: `${this.API_URL}/api/v1/inboxes/${id}/clean`,
      headers: {
        'Api-Token': this.API_TOKEN,
      },
      failOnStatusCode: false,
    });
  }

  resetEmailUsername(id: number) {
    const inboxId = id || Cypress.env('MAILTRAP_INBOX_ID');
    return cy.request({
      method: 'PATCH',
      url: `${Cypress.env('MAILTRAP_API_URL')}/api/v1/inboxes/${inboxId}/reset_email_username`,
      headers: {
        'Api-Token': Cypress.env('MAILTRAP_API_TOKEN'),
      },
      failOnStatusCode: false,
    });
  }
}
const mailtrapOptions: MailtrapOptionsInterface = {
  API_TOKEN: Cypress.env('MAILTRAP_API_TOKEN'),
  API_URL: Cypress.env('MAILTRAP_API_URL'),
};

function mailtrap() {
  Cypress.log({
    displayName: 'Mailtrap',
  });
  return new Mailtrap(mailtrapOptions);
};

Cypress.Commands.add('mailtrap', mailtrap);
Cypress.Commands.add('resetEmailUsername', mailtrap().resetEmailUsername)