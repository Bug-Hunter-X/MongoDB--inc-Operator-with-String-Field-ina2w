# MongoDB $inc Operator with String Field

This repository demonstrates a common error when using the MongoDB `$inc` operator. The `$inc` operator is used to increment a numerical field in a MongoDB document. However, attempting to use it with a string field will result in an error.

The `bug.js` file contains the erroneous code, while `bugSolution.js` provides the corrected version.

## Bug
The bug lies in using `$inc` with a string field. MongoDB expects numerical values for `$inc` operations. Attempting to increment a string value throws an error.