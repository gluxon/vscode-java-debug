//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from "assert";

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from "vscode";
import * as myExtension from "../src/extension";

// Defines a Mocha test suite to group tests of similar kind together
suite("Extension Tests", () => {

    test("Extension should be present", () => {
        assert.ok(vscode.extensions.getExtension("Microsoft.vscode-java-debug"));
    });

    test("should activate", function() {
        this.timeout(1 * 60 * 1000);
        return vscode.extensions.getExtension("Microsoft.vscode-java-debug").activate().then((api) => {
            assert.ok(true);
        });
    });
});