["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/math/size.js"],"~:js","goog.provide(\"goog.math.Size\");\ngoog.math.Size = function(width, height) {\n  this.width = width;\n  this.height = height;\n};\ngoog.math.Size.equals = function(a, b) {\n  if (a == b) {\n    return true;\n  }\n  if (!a || !b) {\n    return false;\n  }\n  return a.width == b.width && a.height == b.height;\n};\ngoog.math.Size.prototype.clone = function() {\n  return new goog.math.Size(this.width, this.height);\n};\nif (goog.DEBUG) {\n  goog.math.Size.prototype.toString = function() {\n    return \"(\" + this.width + \" x \" + this.height + \")\";\n  };\n}\ngoog.math.Size.prototype.getLongest = function() {\n  return Math.max(this.width, this.height);\n};\ngoog.math.Size.prototype.getShortest = function() {\n  return Math.min(this.width, this.height);\n};\ngoog.math.Size.prototype.area = function() {\n  return this.width * this.height;\n};\ngoog.math.Size.prototype.perimeter = function() {\n  return (this.width + this.height) * 2;\n};\ngoog.math.Size.prototype.aspectRatio = function() {\n  return this.width / this.height;\n};\ngoog.math.Size.prototype.isEmpty = function() {\n  return !this.area();\n};\ngoog.math.Size.prototype.ceil = function() {\n  this.width = Math.ceil(this.width);\n  this.height = Math.ceil(this.height);\n  return this;\n};\ngoog.math.Size.prototype.fitsInside = function(target) {\n  return this.width <= target.width && this.height <= target.height;\n};\ngoog.math.Size.prototype.floor = function() {\n  this.width = Math.floor(this.width);\n  this.height = Math.floor(this.height);\n  return this;\n};\ngoog.math.Size.prototype.round = function() {\n  this.width = Math.round(this.width);\n  this.height = Math.round(this.height);\n  return this;\n};\ngoog.math.Size.prototype.scale = function(sx, opt_sy) {\n  const sy = typeof opt_sy === \"number\" ? opt_sy : sx;\n  this.width *= sx;\n  this.height *= sy;\n  return this;\n};\ngoog.math.Size.prototype.scaleToCover = function(target) {\n  const s = this.aspectRatio() <= target.aspectRatio() ? target.width / this.width : target.height / this.height;\n  return this.scale(s);\n};\ngoog.math.Size.prototype.scaleToFit = function(target) {\n  const s = this.aspectRatio() > target.aspectRatio() ? target.width / this.width : target.height / this.height;\n  return this.scale(s);\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview A utility class for representing two-dimensional sizes.\n */\n\n\ngoog.provide('goog.math.Size');\n\n\n\n/**\n * Class for representing sizes consisting of a width and height. Undefined\n * width and height support is deprecated and results in compiler warning.\n * @param {number} width Width.\n * @param {number} height Height.\n * @struct\n * @constructor\n */\ngoog.math.Size = function(width, height) {\n  'use strict';\n  /**\n   * Width\n   * @type {number}\n   */\n  this.width = width;\n\n  /**\n   * Height\n   * @type {number}\n   */\n  this.height = height;\n};\n\n\n/**\n * Compares sizes for equality.\n * @param {goog.math.Size} a A Size.\n * @param {goog.math.Size} b A Size.\n * @return {boolean} True iff the sizes have equal widths and equal\n *     heights, or if both are null.\n */\ngoog.math.Size.equals = function(a, b) {\n  'use strict';\n  if (a == b) {\n    return true;\n  }\n  if (!a || !b) {\n    return false;\n  }\n  return a.width == b.width && a.height == b.height;\n};\n\n\n/**\n * @return {!goog.math.Size} A new copy of the Size.\n */\ngoog.math.Size.prototype.clone = function() {\n  'use strict';\n  return new goog.math.Size(this.width, this.height);\n};\n\n\nif (goog.DEBUG) {\n  /**\n   * Returns a nice string representing size.\n   * @return {string} In the form (50 x 73).\n   * @override\n   */\n  goog.math.Size.prototype.toString = function() {\n    'use strict';\n    return '(' + this.width + ' x ' + this.height + ')';\n  };\n}\n\n\n/**\n * @return {number} The longer of the two dimensions in the size.\n */\ngoog.math.Size.prototype.getLongest = function() {\n  'use strict';\n  return Math.max(this.width, this.height);\n};\n\n\n/**\n * @return {number} The shorter of the two dimensions in the size.\n */\ngoog.math.Size.prototype.getShortest = function() {\n  'use strict';\n  return Math.min(this.width, this.height);\n};\n\n\n/**\n * @return {number} The area of the size (width * height).\n */\ngoog.math.Size.prototype.area = function() {\n  'use strict';\n  return this.width * this.height;\n};\n\n\n/**\n * @return {number} The perimeter of the size (width + height) * 2.\n */\ngoog.math.Size.prototype.perimeter = function() {\n  'use strict';\n  return (this.width + this.height) * 2;\n};\n\n\n/**\n * @return {number} The ratio of the size's width to its height.\n */\ngoog.math.Size.prototype.aspectRatio = function() {\n  'use strict';\n  return this.width / this.height;\n};\n\n\n/**\n * @return {boolean} True if the size has zero area, false if both dimensions\n *     are non-zero numbers.\n */\ngoog.math.Size.prototype.isEmpty = function() {\n  'use strict';\n  return !this.area();\n};\n\n\n/**\n * Clamps the width and height parameters upward to integer values.\n * @return {!goog.math.Size} This size with ceil'd components.\n */\ngoog.math.Size.prototype.ceil = function() {\n  'use strict';\n  this.width = Math.ceil(this.width);\n  this.height = Math.ceil(this.height);\n  return this;\n};\n\n\n/**\n * @param {!goog.math.Size} target The target size.\n * @return {boolean} True if this Size is the same size or smaller than the\n *     target size in both dimensions.\n */\ngoog.math.Size.prototype.fitsInside = function(target) {\n  'use strict';\n  return this.width <= target.width && this.height <= target.height;\n};\n\n\n/**\n * Clamps the width and height parameters downward to integer values.\n * @return {!goog.math.Size} This size with floored components.\n */\ngoog.math.Size.prototype.floor = function() {\n  'use strict';\n  this.width = Math.floor(this.width);\n  this.height = Math.floor(this.height);\n  return this;\n};\n\n\n/**\n * Rounds the width and height parameters to integer values.\n * @return {!goog.math.Size} This size with rounded components.\n */\ngoog.math.Size.prototype.round = function() {\n  'use strict';\n  this.width = Math.round(this.width);\n  this.height = Math.round(this.height);\n  return this;\n};\n\n\n/**\n * Scales this size by the given scale factors. The width and height are scaled\n * by `sx` and `opt_sy` respectively.  If `opt_sy` is not\n * given, then `sx` is used for both the width and height.\n * @param {number} sx The scale factor to use for the width.\n * @param {number=} opt_sy The scale factor to use for the height.\n * @return {!goog.math.Size} This Size object after scaling.\n */\ngoog.math.Size.prototype.scale = function(sx, opt_sy) {\n  'use strict';\n  const sy = (typeof opt_sy === 'number') ? opt_sy : sx;\n  this.width *= sx;\n  this.height *= sy;\n  return this;\n};\n\n\n/**\n * Uniformly scales the size to perfectly cover the dimensions of a given size.\n * If the size is already larger than the target, it will be scaled down to the\n * minimum size at which it still covers the entire target. The original aspect\n * ratio will be preserved.\n *\n * This function assumes that both Sizes contain strictly positive dimensions.\n * @param {!goog.math.Size} target The target size.\n * @return {!goog.math.Size} This Size object, after optional scaling.\n */\ngoog.math.Size.prototype.scaleToCover = function(target) {\n  'use strict';\n  const s = this.aspectRatio() <= target.aspectRatio() ?\n      target.width / this.width :\n      target.height / this.height;\n\n  return this.scale(s);\n};\n\n\n/**\n * Uniformly scales the size to fit inside the dimensions of a given size. The\n * original aspect ratio will be preserved.\n *\n * This function assumes that both Sizes contain strictly positive dimensions.\n * @param {!goog.math.Size} target The target size.\n * @return {!goog.math.Size} This Size object, after optional scaling.\n */\ngoog.math.Size.prototype.scaleToFit = function(target) {\n  'use strict';\n  const s = this.aspectRatio() > target.aspectRatio() ?\n      target.width / this.width :\n      target.height / this.height;\n\n  return this.scale(s);\n};\n","~:compiled-at",1674501661577,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.math.size.js\",\n\"lineCount\":73,\n\"mappings\":\"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\",\n\"sources\":[\"goog/math/size.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview A utility class for representing two-dimensional sizes.\\n */\\n\\n\\ngoog.provide('goog.math.Size');\\n\\n\\n\\n/**\\n * Class for representing sizes consisting of a width and height. Undefined\\n * width and height support is deprecated and results in compiler warning.\\n * @param {number} width Width.\\n * @param {number} height Height.\\n * @struct\\n * @constructor\\n */\\ngoog.math.Size = function(width, height) {\\n  'use strict';\\n  /**\\n   * Width\\n   * @type {number}\\n   */\\n  this.width = width;\\n\\n  /**\\n   * Height\\n   * @type {number}\\n   */\\n  this.height = height;\\n};\\n\\n\\n/**\\n * Compares sizes for equality.\\n * @param {goog.math.Size} a A Size.\\n * @param {goog.math.Size} b A Size.\\n * @return {boolean} True iff the sizes have equal widths and equal\\n *     heights, or if both are null.\\n */\\ngoog.math.Size.equals = function(a, b) {\\n  'use strict';\\n  if (a == b) {\\n    return true;\\n  }\\n  if (!a || !b) {\\n    return false;\\n  }\\n  return a.width == b.width && a.height == b.height;\\n};\\n\\n\\n/**\\n * @return {!goog.math.Size} A new copy of the Size.\\n */\\ngoog.math.Size.prototype.clone = function() {\\n  'use strict';\\n  return new goog.math.Size(this.width, this.height);\\n};\\n\\n\\nif (goog.DEBUG) {\\n  /**\\n   * Returns a nice string representing size.\\n   * @return {string} In the form (50 x 73).\\n   * @override\\n   */\\n  goog.math.Size.prototype.toString = function() {\\n    'use strict';\\n    return '(' + this.width + ' x ' + this.height + ')';\\n  };\\n}\\n\\n\\n/**\\n * @return {number} The longer of the two dimensions in the size.\\n */\\ngoog.math.Size.prototype.getLongest = function() {\\n  'use strict';\\n  return Math.max(this.width, this.height);\\n};\\n\\n\\n/**\\n * @return {number} The shorter of the two dimensions in the size.\\n */\\ngoog.math.Size.prototype.getShortest = function() {\\n  'use strict';\\n  return Math.min(this.width, this.height);\\n};\\n\\n\\n/**\\n * @return {number} The area of the size (width * height).\\n */\\ngoog.math.Size.prototype.area = function() {\\n  'use strict';\\n  return this.width * this.height;\\n};\\n\\n\\n/**\\n * @return {number} The perimeter of the size (width + height) * 2.\\n */\\ngoog.math.Size.prototype.perimeter = function() {\\n  'use strict';\\n  return (this.width + this.height) * 2;\\n};\\n\\n\\n/**\\n * @return {number} The ratio of the size's width to its height.\\n */\\ngoog.math.Size.prototype.aspectRatio = function() {\\n  'use strict';\\n  return this.width / this.height;\\n};\\n\\n\\n/**\\n * @return {boolean} True if the size has zero area, false if both dimensions\\n *     are non-zero numbers.\\n */\\ngoog.math.Size.prototype.isEmpty = function() {\\n  'use strict';\\n  return !this.area();\\n};\\n\\n\\n/**\\n * Clamps the width and height parameters upward to integer values.\\n * @return {!goog.math.Size} This size with ceil'd components.\\n */\\ngoog.math.Size.prototype.ceil = function() {\\n  'use strict';\\n  this.width = Math.ceil(this.width);\\n  this.height = Math.ceil(this.height);\\n  return this;\\n};\\n\\n\\n/**\\n * @param {!goog.math.Size} target The target size.\\n * @return {boolean} True if this Size is the same size or smaller than the\\n *     target size in both dimensions.\\n */\\ngoog.math.Size.prototype.fitsInside = function(target) {\\n  'use strict';\\n  return this.width <= target.width && this.height <= target.height;\\n};\\n\\n\\n/**\\n * Clamps the width and height parameters downward to integer values.\\n * @return {!goog.math.Size} This size with floored components.\\n */\\ngoog.math.Size.prototype.floor = function() {\\n  'use strict';\\n  this.width = Math.floor(this.width);\\n  this.height = Math.floor(this.height);\\n  return this;\\n};\\n\\n\\n/**\\n * Rounds the width and height parameters to integer values.\\n * @return {!goog.math.Size} This size with rounded components.\\n */\\ngoog.math.Size.prototype.round = function() {\\n  'use strict';\\n  this.width = Math.round(this.width);\\n  this.height = Math.round(this.height);\\n  return this;\\n};\\n\\n\\n/**\\n * Scales this size by the given scale factors. The width and height are scaled\\n * by `sx` and `opt_sy` respectively.  If `opt_sy` is not\\n * given, then `sx` is used for both the width and height.\\n * @param {number} sx The scale factor to use for the width.\\n * @param {number=} opt_sy The scale factor to use for the height.\\n * @return {!goog.math.Size} This Size object after scaling.\\n */\\ngoog.math.Size.prototype.scale = function(sx, opt_sy) {\\n  'use strict';\\n  const sy = (typeof opt_sy === 'number') ? opt_sy : sx;\\n  this.width *= sx;\\n  this.height *= sy;\\n  return this;\\n};\\n\\n\\n/**\\n * Uniformly scales the size to perfectly cover the dimensions of a given size.\\n * If the size is already larger than the target, it will be scaled down to the\\n * minimum size at which it still covers the entire target. The original aspect\\n * ratio will be preserved.\\n *\\n * This function assumes that both Sizes contain strictly positive dimensions.\\n * @param {!goog.math.Size} target The target size.\\n * @return {!goog.math.Size} This Size object, after optional scaling.\\n */\\ngoog.math.Size.prototype.scaleToCover = function(target) {\\n  'use strict';\\n  const s = this.aspectRatio() <= target.aspectRatio() ?\\n      target.width / this.width :\\n      target.height / this.height;\\n\\n  return this.scale(s);\\n};\\n\\n\\n/**\\n * Uniformly scales the size to fit inside the dimensions of a given size. The\\n * original aspect ratio will be preserved.\\n *\\n * This function assumes that both Sizes contain strictly positive dimensions.\\n * @param {!goog.math.Size} target The target size.\\n * @return {!goog.math.Size} This Size object, after optional scaling.\\n */\\ngoog.math.Size.prototype.scaleToFit = function(target) {\\n  'use strict';\\n  const s = this.aspectRatio() > target.aspectRatio() ?\\n      target.width / this.width :\\n      target.height / this.height;\\n\\n  return this.scale(s);\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"math\",\"Size\",\"goog.math.Size\",\"width\",\"height\",\"equals\",\"goog.math.Size.equals\",\"a\",\"b\",\"prototype\",\"clone\",\"goog.math.Size.prototype.clone\",\"DEBUG\",\"toString\",\"goog.math.Size.prototype.toString\",\"getLongest\",\"goog.math.Size.prototype.getLongest\",\"Math\",\"max\",\"getShortest\",\"goog.math.Size.prototype.getShortest\",\"min\",\"area\",\"goog.math.Size.prototype.area\",\"perimeter\",\"goog.math.Size.prototype.perimeter\",\"aspectRatio\",\"goog.math.Size.prototype.aspectRatio\",\"isEmpty\",\"goog.math.Size.prototype.isEmpty\",\"ceil\",\"goog.math.Size.prototype.ceil\",\"fitsInside\",\"goog.math.Size.prototype.fitsInside\",\"target\",\"floor\",\"goog.math.Size.prototype.floor\",\"round\",\"goog.math.Size.prototype.round\",\"scale\",\"goog.math.Size.prototype.scale\",\"sx\",\"opt_sy\",\"sy\",\"scaleToCover\",\"goog.math.Size.prototype.scaleToCover\",\"s\",\"scaleToFit\",\"goog.math.Size.prototype.scaleToFit\"]\n}\n"]