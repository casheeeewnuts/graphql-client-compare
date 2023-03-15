/**
 * @generated SignedSource<<2efa8e7a6a911d1ce7d95e6013b5e5ac>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserComponent_user$data = {
  readonly article: ReadonlyArray<{
    readonly id: string;
    readonly name: string;
  }> | null;
  readonly email: string;
  readonly id: string;
  readonly name: string;
  readonly " $fragmentType": "UserComponent_user";
};
export type UserComponent_user$key = {
  readonly " $data"?: UserComponent_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserComponent_user">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserComponent_user",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Article",
      "kind": "LinkedField",
      "name": "article",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        (v1/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
})();

(node as any).hash = "e3565d7d8ce7d63a7fedf8b9112d5d85";

export default node;
