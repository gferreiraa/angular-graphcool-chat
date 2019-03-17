import { Apollo } from 'apollo-angular';
import { Component } from '@angular/core';

import gql from 'graphql-tag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private apiURL = 'https://api.graph.cool/simple/v1/cjtcaq0c00lfg015002m6bx1a';
  constructor(
    private apollo: Apollo
    ) {
      this.allUsers();
    }

  // Query Request
  allUsers(): void {
    this.apollo.query({
      query: gql`
        query {
          allUsers{
            id
            name
            email
          }
        }
      `
    }).subscribe(data => console.log(data));
  }

  createUser(): void {
    const body = {
      query: `
        mutation CreateNewUser($name: String!, $email: String!, $password: String!) {
          createUser(name: $name, email: $email, password: $password) {
            id
            name
            email
          }
        }
        `,
      variables: {
        name: 'Link',
        email: 'link@hyrule.com',
        password: '123456'
      }
    };
  }
}
