/*
 * Copyright (C) 2021 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import formatMessage from '../../../../format-message'

export default [
  {
    name: formatMessage('Basic'),
    commands: [
      {
        displayName: 'x_{\u2B1A}^{\\ }',
        command: '_{\\placeholder{}}',
        advancedCommand: '_',
        svgCommand: 'x_{\\square}',
        label: formatMessage('Subscript')
      },
      {
        displayName: 'x^{\u2B1A}_{\\ }',
        command: '^{\\placeholder{}}',
        advancedCommand: '^',
        svgCommand: 'x^{\\square}',
        label: formatMessage('Superscript')
      },
      {
        displayName: '\\frac{\u2B1A}{\u2B1A}',
        command: '\\frac{\\placeholder{}}{\\placeholder{}}',
        advancedCommand: '\\frac{ }{ }',
        svgCommand: '\\frac{n}{m}',
        label: formatMessage('Fraction')
      },
      {
        displayName: '\\sqrt{\\ }',
        command: '\\sqrt{\\placeholder{}}',
        advancedCommand: '\\sqrt{ }',
        svgCommand: '\\sqrt{ }',
        label: formatMessage('Square Root')
      },
      {
        displayName: '\\sqrt[n]{\\ }',
        command: '\\sqrt[\\placeholder{}]{\\placeholder{}}',
        advancedCommand: '\\sqrt[ ]{ }',
        svgCommand: '\\sqrt[n]{ }',
        label: formatMessage('N-th Root')
      },
      {command: '\\langle', label: formatMessage('Left Angle Bracket')},
      {command: '\\rangle', label: formatMessage('Right Angle Bracket')},
      {
        displayName: '\\binom{n}{m}',
        command: '\\binom{\\placeholder{}}{\\placeholder{}}',
        advancedCommand: '\\binom{ }{ }',
        svgCommand: '\\binom{n}{m}',
        label: formatMessage('Binomial Coefficient')
      },
      // TODO maybe re-add vector, after figuring out if it even works
      {command: 'f', label: formatMessage('F (function)')},
      {command: '\\prime', label: formatMessage('Prime')},
      {command: '+', label: formatMessage('Plus')},
      {command: '-', label: formatMessage('Minus')},
      {command: '\\pm', label: formatMessage('Plus/Minus')},
      {command: '\\mp', label: formatMessage('Minus/Plus')},
      {command: '\\cdot', label: formatMessage('Centered Dot')},
      {command: '=', label: formatMessage('Equals Sign')},
      {command: '\\times', label: formatMessage('Multiplication Sign')},
      {command: '\\div', label: formatMessage('Division Sign')},
      {command: '\\ast', label: formatMessage('Asterisk')},
      {command: '\\therefore', label: formatMessage('Therefore')},
      {command: '\\because', label: formatMessage('Because')},
      {
        displayName: '\\sum_{\\ }^{\\ }',
        command: '\\sum_{\\placeholder{}}^{\\placeholder{}}',
        advancedCommand: '\\sum_{ }^{ }',
        svgCommand: '\\sum',
        label: formatMessage('Sum')
      },
      {
        displayName: '\\prod_{\\ }^{\\ }',
        command: '\\prod_{\\placeholder{}}^{\\placeholder{}}',
        advancedCommand: '\\prod_{ }^{ }',
        svgCommand: '\\prod',
        label: formatMessage('Product')
      },
      {
        displayName: '\\coprod_{\\ }^{\\ }',
        command: '\\coprod_{\\placeholder{}}^{\\placeholder{}}',
        advancedCommand: '\\coprod_{ }^{ }',
        svgCommand: '\\coprod',
        label: formatMessage('Coproduct')
      },
      {
        displayName: '\\int_{\\ }^{\\ }',
        command: '\\int_{\\placeholder{}}^{\\placeholder{}}',
        advancedCommand: '\\int_{ }^{ }',
        svgCommand: '\\int',
        label: formatMessage('Integral')
      },
      {command: '\\mathbb{N}', label: formatMessage('Natural Numbers')},
      {command: '\\mathbb{P}', label: formatMessage('Prime Numbers')},
      {command: '\\mathbb{Z}', label: formatMessage('Integers')},
      {command: '\\mathbb{Q}', label: formatMessage('Rational Numbers')},
      {command: '\\mathbb{R}', label: formatMessage('Real Numbers')},
      {command: '\\mathbb{C}', label: formatMessage('Complex Numbers')},
      {command: '\\mathbb{H}', label: formatMessage('Quaternions')},
      {
        displayName: '\\overline{\u2B1A}',
        command: '\\overline{\\placeholder{}}',
        advancedCommand: '\\overline{ }',
        svgCommand: '\\overline{x}',
        label: formatMessage('Bar')
      },
      {
        displayName: '\\hat{\u2B1A}',
        command: '\\hat{\\placeholder{}}',
        advancedCommand: '\\hat{ }',
        svgCommand: '\\hat{x}',
        label: formatMessage('Hat')
      },
      {
        displayName: '\\vec{\u2B1A}',
        command: '\\vec{\\placeholder{}}',
        advancedCommand: '\\vec{ }',
        svgCommand: '\\vec{v}',
        label: formatMessage('Vector (Notation)')
      }
    ]
  },

  {
    name: formatMessage('Greek'),
    commands: [
      {command: '\\alpha', label: formatMessage('Alpha')},
      {command: '\\beta', label: formatMessage('Beta')},
      {command: '\\gamma', label: formatMessage('Gamma')},
      {command: '\\delta', label: formatMessage('Delta')},
      {command: '\\epsilon', label: formatMessage('Epsilon')},
      {command: '\\zeta', label: formatMessage('Zeta')},
      {command: '\\eta', label: formatMessage('Eta')},
      {command: '\\theta', label: formatMessage('Theta')},
      {command: '\\iota', label: formatMessage('Iota')},
      {command: '\\kappa', label: formatMessage('Kappa')},
      {command: '\\lambda', label: formatMessage('Lambda')},
      {command: '\\mu', label: formatMessage('Mu')},
      {command: '\\nu', label: formatMessage('Nu')},
      {command: '\\xi', label: formatMessage('Xi')},
      {command: '\\pi', label: formatMessage('Pi')},
      {command: '\\rho', label: formatMessage('Rho')},
      {command: '\\sigma', label: formatMessage('Sigma')},
      {command: '\\tau', label: formatMessage('Tau')},
      {command: '\\upsilon', label: formatMessage('Upsilon')},
      {command: '\\phi', label: formatMessage('Phi')},
      {command: '\\chi', label: formatMessage('Chi')},
      {command: '\\psi', label: formatMessage('Psi')},
      {command: '\\omega', label: formatMessage('Omega')},
      {command: '\\digamma', label: formatMessage('Digamma')},
      {command: '\\varepsilon', label: formatMessage('Epsilon (Variant)')},
      {command: '\\vartheta', label: formatMessage('Theta (Variant)')},
      {command: '\\varkappa', label: formatMessage('Kappa (Variant)')},
      {command: '\\varpi', label: formatMessage('Pi (Variant)')},
      {command: '\\varrho', label: formatMessage('Rho (Variant)')},
      {command: '\\varsigma', label: formatMessage('Sigma (Variant)')},
      {command: '\\varphi', label: formatMessage('Phi (Variant)')},
      {command: '\\Gamma', label: formatMessage('Uppercase Gamma')},
      {command: '\\Delta', label: formatMessage('Uppercase Delta')},
      {command: '\\Theta', label: formatMessage('Uppercase Theta')},
      {command: '\\Lambda', label: formatMessage('Uppercase Lambda')},
      {command: '\\Xi', label: formatMessage('Uppercase Xi')},
      {command: '\\Pi', label: formatMessage('Uppercase Pi')},
      {command: '\\Sigma', label: formatMessage('Uppercase Sigma')},
      {command: '\\Upsilon', label: formatMessage('Uppercase Upsilon')},
      {command: '\\Phi', label: formatMessage('Uppercase Phi')},
      {command: '\\Psi', label: formatMessage('Uppercase Psi')},
      {command: '\\Omega', label: formatMessage('Uppercase Omega')}
    ]
  },

  {
    name: formatMessage('Operators'),
    commands: [
      {command: '\\wedge', label: formatMessage('And')},
      {command: '\\vee', label: formatMessage('Or')},
      {command: '\\cup', label: formatMessage('Union')},
      {command: '\\cap', label: formatMessage('Intersection')},
      {command: '\\diamond', label: formatMessage('Diamond')},
      {command: '\\bigtriangleup', label: formatMessage('Upward Pointing Triangle')},
      {command: '\\ominus', label: formatMessage('Encircled Minus')},
      {command: '\\uplus', label: formatMessage('Disjoint Union')},
      {command: '\\otimes', label: formatMessage('Encircled Times')},
      {command: '\\oplus', label: formatMessage('Encircled Plus')},
      {command: '\\bigtriangledown', label: formatMessage('Downward Pointing Triangle')},
      {command: '\\sqcap', label: formatMessage('Square Cap')},
      {command: '\\triangleleft', label: formatMessage('Leftward Pointing Triangle')},
      {command: '\\sqcup', label: formatMessage('Square Cup')},
      {command: '\\triangleright', label: formatMessage('Rightward Pointing Triangle')},
      {command: '\\odot', label: formatMessage('Encircled Dot')},
      {command: '\\bigcirc', label: formatMessage('Big Circle')},
      {command: '\\dagger', label: formatMessage('Dagger')},
      {command: '\\ddagger', label: formatMessage('Double Dagger')},
      {command: '\\wr', label: formatMessage('Wreath Product')},
      {command: '\\amalg', label: formatMessage('Amalg (Coproduct)')}
    ]
  },

  {
    name: formatMessage('Relationships'),
    commands: [
      {command: '<', label: formatMessage('Less Than')},
      {command: '>', label: formatMessage('Greater Than')},
      {command: '\\equiv', label: formatMessage('Equivalent (Identity)')},
      {command: '\\cong', label: formatMessage('Congruent')},
      {command: '\\sim', label: formatMessage('Equivalence Class')},
      {command: '\\notin', label: formatMessage('Not In (Not An Element Of)')},
      {command: '\\ne', label: formatMessage('Not Equal')},
      {command: '\\propto', label: formatMessage('Proportional')},
      {command: '\\approx', label: formatMessage('Approximately')},
      {command: '\\le', label: formatMessage('Less Than Or Equal')},
      {command: '\\ge', label: formatMessage('Greater Than Or Equal')},
      {command: '\\in', label: formatMessage('In (Element Of)')},
      {command: '\\ni', label: formatMessage('Contains')},
      // TODO consider reenabling once mathlive supports it
      // { command: '\\notni' },
      {command: '\\subset', label: formatMessage('Subset (Strict)')},
      {command: '\\supset', label: formatMessage('Superset (Strict)')},
      {command: '\\not\\subset', label: formatMessage('Not Subset (Strict)')},
      {command: '\\not\\supset', label: formatMessage('Not Superset (Strict)')},
      {command: '\\subseteq', label: formatMessage('Subset')},
      {command: '\\supseteq', label: formatMessage('Superset')},
      {command: '\\not\\subseteq', label: formatMessage('Not Subset')},
      {command: '\\not\\supseteq', label: formatMessage('Not Superset')},
      {command: '\\models', label: formatMessage('Inference')},
      {command: '\\prec', label: formatMessage('Precedes')},
      {command: '\\succ', label: formatMessage('Succeeds')},
      {command: '\\preceq', label: formatMessage('Precedes Equal')},
      {command: '\\succeq', label: formatMessage('Succeeds Equal')},
      {command: '\\simeq', label: formatMessage('Group Isomorphism')},
      {command: '\\mid', label: formatMessage('Vertical Bar (Set Builder Notation)')},
      {command: '\\ll', label: formatMessage('Nested Less Than')},
      {command: '\\gg', label: formatMessage('Nested Greater Than')},
      {command: '\\parallel', label: formatMessage('Parallel')},
      {command: '\\bowtie', label: formatMessage('Bowtie')},
      {command: '\\sqsubset', label: formatMessage('Square Subset (Strict)')},
      {command: '\\sqsupset', label: formatMessage('Square Superset (Strict)')},
      {command: '\\smile', label: formatMessage('Cup Product')},
      {command: '\\sqsubseteq', label: formatMessage('Square Subset')},
      {command: '\\sqsupseteq', label: formatMessage('Square Superset')},
      {command: '\\doteq', label: formatMessage('Approaches the Limit')},
      {command: '\\frown', label: formatMessage('Cap Product')},
      {command: '\\vdash', label: formatMessage('Turnstile (Yields)')},
      {command: '\\dashv', label: formatMessage('Reverse Turnstile (Does Not Yield)')},
      {command: '\\exists', label: formatMessage('Exists')},
      {command: '\\varnothing', label: formatMessage('Empty Set')}
    ]
  },

  {
    name: formatMessage('Arrows'),
    commands: [
      {command: '\\longleftarrow', label: formatMessage('Left Arrow')},
      {command: '\\longrightarrow', label: formatMessage('Right Arrow')},
      {command: '\\Longleftarrow', label: formatMessage('Thick Left Arrow')},
      {command: '\\Longrightarrow', label: formatMessage('Thick Right Arrow')},
      {command: '\\longleftrightarrow', label: formatMessage('Logical Equivalence')},
      {command: '\\updownarrow', label: formatMessage('Upward And Downward Pointing Arrow')},
      {command: '\\Longleftrightarrow', label: formatMessage('Logical Equivalence (Thick)')},
      {
        command: '\\Updownarrow',
        label: formatMessage('Upward And Downward Pointing Arrow (Thick)')
      },
      {command: '\\mapsto', label: formatMessage('Maps To')},
      {command: '\\nearrow', label: formatMessage('Up And Right Diagonal Arrow')},
      {command: '\\hookleftarrow', label: formatMessage('Left Arrow With Hook')},
      {command: '\\hookrightarrow', label: formatMessage('Right Arrow With Hook')},
      {command: '\\searrow', label: formatMessage('Down And Right Diagonal Arrow')},
      {command: '\\leftharpoonup', label: formatMessage('Left Upward Harpoon Arrow')},
      {command: '\\rightharpoonup', label: formatMessage('Right Upward Harpoon Arrow')},
      {command: '\\swarrow', label: formatMessage('Down And Left Diagonal Arrow')},
      {command: '\\leftharpoondown', label: formatMessage('Left Downard Harpoon Arrow')},
      {command: '\\rightharpoondown', label: formatMessage('Right Downward Harpoon Arrow')},
      {command: '\\nwarrow', label: formatMessage('Up And Left Diagonal Arrow')},
      {command: '\\downarrow', label: formatMessage('Downward Arrow')},
      {command: '\\Downarrow', label: formatMessage('Thick Downward Arrow')},
      {command: '\\uparrow', label: formatMessage('Upward Arrow')},
      {command: '\\Uparrow', label: formatMessage('Thick Upward Arrow')},
      {command: '\\rightarrow', label: formatMessage('Rightward Arrow')},
      {command: '\\Rightarrow', label: formatMessage('Thick Rightward Arrow')},
      {command: '\\leftarrow', label: formatMessage('Leftward Arrow')},
      {command: '\\Leftarrow', label: formatMessage('Thick Leftward Arrow')},
      {command: '\\leftrightarrow', label: formatMessage('Logical Equivalence (Short)')},
      {command: '\\Leftrightarrow', label: formatMessage('Logical Equivalence (Short And Thick)')}
    ]
  },

  {
    name: formatMessage('Delimiters'),
    commands: [
      {command: '\\lfloor', label: formatMessage('Left Floor')},
      {command: '\\rfloor', label: formatMessage('Right Floor')},
      {command: '\\lceil', label: formatMessage('Left Ceiling')},
      {command: '\\rceil', label: formatMessage('Right Ceiling')},
      {command: '/', label: formatMessage('Forward Slash')},
      {command: '\\lbrace', label: formatMessage('Left Curly Brace')},
      {command: '\\rbrace', label: formatMessage('Right Curly Brace')}
    ]
  },

  {
    name: formatMessage('Misc'),
    commands: [
      {command: '\\forall', label: formatMessage('For All')},
      {command: '\\ldots', label: formatMessage('Low Horizontal Dots')},
      {command: '\\cdots', label: formatMessage('Centered Horizontal Dots')},
      {command: '\\vdots', label: formatMessage('Vertical Dots')},
      {command: '\\ddots', label: formatMessage('Diagonal Dots')},
      {command: '\\surd', label: formatMessage('Square Root Symbol')},
      {command: '\\triangle', label: formatMessage('Triangle')},
      {command: '\\ell', label: formatMessage('Script L')},
      {command: '\\top', label: formatMessage('Top')},
      {command: '\\flat', label: formatMessage('Flat (Music)')},
      {command: '\\natural', label: formatMessage('Natural (Music)')},
      {command: '\\sharp', label: formatMessage('Sharp (Music)')},
      {command: '\\wp', label: formatMessage('Power Set')},
      {command: '\\bot', label: formatMessage('Bottom')},
      {command: '\\clubsuit', label: formatMessage('Clubs (Suit)')},
      {command: '\\diamondsuit', label: formatMessage('Diamonds (Suit)')},
      {command: '\\heartsuit', label: formatMessage('Hearts (Suit)')},
      {command: '\\spadesuit', label: formatMessage('Spades (Suit)')},
      // TODO maybe readd caret, underscore once I figure out if they even worked
      {command: '\\backslash', label: formatMessage('Backslash')},
      {command: '\\vert', label: formatMessage('Vertical Bar (Set Builder Notation)')},
      {command: '\\perp', label: formatMessage('Perpendicular')},
      {command: '\\nabla', label: formatMessage('Nabla')},
      {command: '\\hbar', label: formatMessage('H Bar')},
      // TODO consider renabling if we can not get stuck in text mode
      // { command: '\\text\\AA' },
      {command: '\\circ', label: formatMessage('Open Circle')},
      {command: '\\bullet', label: formatMessage('Solid Circle')},
      {command: '\\setminus', label: formatMessage('Set Minus')},
      {command: '\\neg', label: formatMessage('Not (Negation)')},
      // TODO consider reenabling once mathlive supports it
      // { command: '\\dots' },
      {command: '\\Re', label: formatMessage('Real Portion (of Complex Number)')},
      {command: '\\Im', label: formatMessage('Imaginary Portion (of Complex Number)')},
      {command: '\\partial', label: formatMessage('Partial (Derivative)')},
      {command: '\\infty', label: formatMessage('Infinity')},
      {command: '\\aleph', label: formatMessage('Aleph')},
      {command: '^\\circ', label: formatMessage('Degree Symbol')}, // \\deg requires the gensymb package added to LaTex
      {command: '\\angle', label: formatMessage('Angle')}
    ]
  }
]
