/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type UserLoginWithEmailInput = {
    readonly email: string;
    readonly password: string;
    readonly clientMutationId?: string | null;
};
export type LoginQueryVariables = {
    readonly input: UserLoginWithEmailInput;
};
export type LoginQueryResponse = {
    readonly signInMutation: {
        readonly token: string | null;
        readonly error: string | null;
    } | null;
};
export type LoginQuery = {
    readonly response: LoginQueryResponse;
    readonly variables: LoginQueryVariables;
};



/*
mutation LoginQuery(
  $input: UserLoginWithEmailInput!
) {
  signInMutation(input: $input) {
    token
    error
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "input",
            "type": "UserLoginWithEmailInput!",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "LinkedField",
            "alias": null,
            "name": "signInMutation",
            "storageKey": null,
            "args": [
                {
                    "kind": "Variable",
                    "name": "input",
                    "variableName": "input",
                    "type": "UserLoginWithEmailInput!"
                }
            ],
            "concreteType": "UserLoginWithEmailPayload",
            "plural": false,
            "selections": [
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "token",
                    "args": null,
                    "storageKey": null
                },
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "error",
                    "args": null,
                    "storageKey": null
                }
            ]
        } as any)
    ];
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "LoginQuery",
            "type": "MutationType",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "operation": {
            "kind": "Operation",
            "name": "LoginQuery",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "params": {
            "operationKind": "mutation",
            "name": "LoginQuery",
            "id": null,
            "text": "mutation LoginQuery(\n  $input: UserLoginWithEmailInput!\n) {\n  signInMutation(input: $input) {\n    token\n    error\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '9379f62fdbea93a70735be993e8d1772';
export default node;