/// <reference types="Cypress" />
import { Mailtrap } from './commands/mailtrap';

declare global {
  interface Window {
    $app: any;
  }

  namespace Cypress {
    interface MailtrapUserInterface {
      id: number,
      name: string,
      email_username: string;
      email_domain: string;
    }
    interface OrdersOptions {
      type: string;
      numberValue: string;
    }
    interface SignUpOptions {
      email: string;
      plainPassword: string;
      firstName: string;
    }
    interface FakePersonInterface {
      email: string;
      plainPassword: string;
      firstName: string;
      lastName: string;
      userName: string;
      password1: string;
      password2: string;
    }

    /**
   * WIP
   * @see https://github.com/cucumber/cucumber-js/blob/master/features/data_tables.feature
   */
    interface DataTable<R> {
      /**
       * With column headers.
       * Returns an array of objects where each row is converted to an object (column header is the key)
       */
      hashes(): R[];
      /**
       * With column headers.
       * Returns the table as a 2-D array, without the first row
       */
      rows(): string[];
      /**
       * Without column headers.
       * returns the table as a 2-D array
       */
      raw(): [];
      /**
       * Without column headers.
       * returns an object where each row corresponds to an entry (first column is the key, second column is the value)
       */
      rowsHash(): Object;

      rawTable: Array<string[]>
    }


    interface Chainable<Subject> {
      compareSnapshot(name?: string, options?: number): Chainable<any>;
      /**
       * Activate account
       */
      maildrop(): Chainable<any>
      /**
       * Mailtrap.io API
       * @example
       ```js
           cy.mailtrap() // initialize Mailtrap class after you submit sign up form
             .pipe(getInboxMessages) // get messages
             .its('body') // invoke prop 'body'
             .pipe(activateAccount) // get activation link and activate your account
             .signIn(); // sign in
       ```
       */
      mailtrap(): Chainable<Mailtrap>
      resetEmailUsername(id?: number): Chainable<Response>
      /**
       * Sign up without arguments
       * @example
       *  cy.faker().signUp().its('requestBody').should('have.key', 'email');
       */
      signUp(): Chainable<Response>
      /**
       * Sign up without arguments
       * @example
       *  cy.signOut()
       */
      signOut(): Chainable<JQuery>
      /**
       * Sign up without arguments
       * @example
       *  cy.faker().signUp().its('requestBody').should('have.key', 'email');
       */
      signIn(): Chainable<any>
      /**
       *
       */
      deleteAccount(token: string): Chainable<void>
      /**
       * Creates fake user
       * @example
       ```
          cy.faker().as('fakePerson');
       ```
       */
      faker(): Chainable<FakePersonInterface>
      /**
       * Compare Languages
       * @example
       ```
          cy.createLanguageAlias('русском языке');
       ```
       */
      createLanguageAlias(lang: string): Chainable<any>
      /**
       * Compare Languages
       * @example
       ```
          cy.compareLanguages('.home__banner-info');
       ```
       */
      compareLanguages(selector: string): Chainable<any>
      /**
       * Save Local Storage
       * @example
       ```
          cy.saveLocalStorage(['auth_token', 'i18n-lang']);
       ```
       */
      saveLocalStorage(keys: string[]): Chainable<any>
    }
  }

  namespace Mailtrap {

    export interface Report {
      name: string;
      url: string;
      in_black_list: boolean;
    }

    export interface BlacklistsReportInfo {
      result: string;
      domain: string;
      ip: string;
      report: Report[];
    }

    interface Data {
      mail_from_addr: string;
      rcpt_to_addrs: string[];
      client_ip: string;
    }

    interface SmtpInformation {
      ok: boolean;
      data: Data;
    }

    interface InboxObject {
      id: number;
      inbox_id: number;
      subject: string;
      sent_at: Date;
      from_email: string;
      from_name: string;
      to_email: string;
      to_name: string;
      email_size: number;
      is_read: boolean;
      created_at: Date;
      updated_at: Date;
      html_body_size: number;
      text_body_size: number;
      human_size: string;
      html_path: string;
      txt_path: string;
      raw_path: string;
      download_path: string;
      html_source_path: string;
      blacklists_report_info: BlacklistsReportInfo;
      smtp_information: SmtpInformation;
    }

  }
}

