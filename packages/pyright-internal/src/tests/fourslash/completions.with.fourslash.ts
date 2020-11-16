/// <reference path="fourslash.ts" />

// @filename: test.py
//// from unittest.mock import patch
//// def some_func():
////     pass
//// with patch[|/*marker1*/|]('some_func'):
////     pass
//// with patch('some_func') as[|/*marker2*/|] a1:
////     pass
//// with patch('some_func') as   [|/*marker3*/|] a1:
////     pass
//// with patch('some_func') as a[|/*marker4*/|]2:
////     pass
//// with patch('some_func') as a3, \
////         patch('some_func') as [|/*marker5*/|]a4:
////     pass

// @ts-ignore
await helper.verifyCompletion('included', 'markdown', {
    marker1: { completions: [{ label: 'patch', kind: Consts.CompletionItemKind.Variable }] },
});

// @ts-ignore
await helper.verifyCompletion('exact', 'markdown', {
    marker2: { completions: [] },
    marker3: { completions: [] },
    marker4: { completions: [] },
    marker5: { completions: [] },
});
