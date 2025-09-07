import Principle from '../models/Principle';
import Guideline from '../models/Guideline';
import SuccessCriterion from '../models/SuccessCriterion';
import Quiz from '../models/Quiz';

/*                                                                            */
/*                                PRINCIPLE 1                                 */
/*                                                                            */

//     Guideline 1.1: Text Alternatives (split 1.1.1 into a/b/c)    

const sc_1_1_1a = new SuccessCriterion(
    '1.1.1a',
    'Product Images',
    'A',
    'Meaningful images must have descriptive alt text that conveys their purpose.',
    {
        type: 'images',
        note: 'Examples for 1.1.1a Informative images',
        items: [
            {
                id: 'pass',
                uri: require('../assets/examples/pass_1_1_1_a.png'),
                alt: 'Image with descriptive alt text',
                caption: 'Informative image has alt text',
                isPassing: true
            },
            {
                id: 'fail',
                uri: require('../assets/examples/fail_1_1_1_a.png'),
                alt: 'Image without alt text',
                caption: 'No alt text provided',
                isPassing: false
            },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/non text content.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#non text content',
    }
);

const sc_1_1_1b = new SuccessCriterion(
    '1.1.1b',
    'Controls & Inputs (Image Buttons)',
    'A',
    'Image based controls must expose an accessible name describing the action (e.g., “Search”).',
    {
        type: 'images',
        note: 'Examples for 1.1.1b   Controls & inputs',
        items: [
            {
                id: 'pass',
                uri: require('../assets/examples/pass_1_1_1_b.png'),
                alt: 'Magnifying glass icon button labeled “Search”',
                caption: 'Icon button labeled by function, not appearance.',
                isPassing: true,
            },
            {
                id: 'fail',
                uri: require('../assets/examples/fail_1_1_1_b.png'),
                alt: 'Icon button with no accessible name',
                caption: 'Relies on icon only; no accessible name.',
                isPassing: false,
            },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/non text content.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#non text content',
    }
);

const sc_1_1_1c = new SuccessCriterion(
    '1.1.1c',
    'Decorative Images',
    'A',
    'Purely decorative images should be hidden from assistive technologies (empty alt / not focusable).',
    {
        type: 'images',
        note: 'Examples for 1.1.1c   Decorative images',
        items: [
            {
                id: 'pass',
                uri: require('../assets/examples/pass_1_1_1_c.png'),
                alt: '',
                caption: 'Decoration is ignored by assistive tech (empty alt).',
                isPassing: true,
            },
            {
                id: 'fail',
                uri: require('../assets/examples/fail_1_1_1_c.png'),
                alt: 'Decorative illustration exposed to Assistive Technology',
                caption: 'Decorative image announced unnecessarily.',
                isPassing: false,
            },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/non text content.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#non text content',
    }
);

const quiz_1_1 = new Quiz('1.1', [
    {
        id: 'q1',
        stem: 'What should meaningful images include to meet 1.1.1?',
        options: [
            { id: 'a', label: 'Descriptive alt text', isCorrect: true },
            { id: 'b', label: 'A filename as alt', isCorrect: false },
            { id: 'c', label: 'No alt text', isCorrect: false },
        ],
    },
    {
        id: 'q2',
        stem: 'How should purely decorative images be handled?',
        options: [
            { id: 'a', label: 'Alt text “decorative”', isCorrect: false },
            { id: 'b', label: 'Empty alt (alt="") or hidden from AT', isCorrect: true },
            { id: 'c', label: 'Describe the style in detail', isCorrect: false },
        ],
    },
    {
        id: 'q3',
        stem: 'An image is used as a Search button (magnifying glass). The text alternative should…',
        options: [
            { id: 'a', label: 'Be left empty', isCorrect: false },
            { id: 'b', label: 'Describe the icon shape', isCorrect: false },
            { id: 'c', label: 'Name the function: “Search”', isCorrect: true },
        ],
    },
    {
        id: 'q4',
        stem: 'A chart conveys important data. Best approach for 1.1.1?',
        options: [
            { id: 'a', label: 'Very long alt with all numbers', isCorrect: false },
            { id: 'b', label: 'Provide a text summary or data table', isCorrect: true },
            { id: 'c', label: 'Rely on color differences only', isCorrect: false },
        ],
    },
    {
        id: 'q5',
        stem: 'Which is acceptable alt text for a company logo linking home?',
        options: [
            { id: 'a', label: 'Company name (e.g., “Acme Home”)', isCorrect: true },
            { id: 'b', label: 'IMG_00321.png', isCorrect: false },
            { id: 'c', label: 'Logo', isCorrect: false },
        ],
    },
]);

const g_1_1 = new Guideline(
    '1.1',
    'Text Alternatives',
    'Provide text alternatives for non text content.',
    [sc_1_1_1a, sc_1_1_1b, sc_1_1_1c],
    quiz_1_1
);


/*            Guideline 1.2   Time based Media (3 SC, A/AA only)            */
const sc_1_2_1 = new SuccessCriterion(
    '1.2.1',
    'Audio only and Video only (Prerecorded)',
    'A',
    'Provide alternatives for prerecorded audio only and video only content.',
    {
        type: '',
        note: 'Examples for SC 1.2.1',
        items: [
            { id: 'pass', uri: 'pass_1_2_1.png', alt: 'Transcript for audio file', caption: 'Transcript makes audio accessible', isPassing: true },
            { id: 'fail', uri: 'fail_1_2_1.png', alt: 'Audio file without transcript', caption: 'No alternative provided', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/audio only and video only prerecorded.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#audio only and video only prerecorded',
    }
);

const sc_1_2_2 = new SuccessCriterion(
    '1.2.2',
    'Captions (Prerecorded)',
    'A',
    'Provide captions for prerecorded audio content in synchronized media.',
    {
        type: '',
        note: 'Examples for SC 1.2.2',
        items: [
            { id: 'pass', uri: 'pass_1_2_2.png', alt: 'Video with captions', caption: 'Captions displayed for spoken content', isPassing: true },
            { id: 'fail', uri: 'fail_1_2_2.png', alt: 'Video without captions', caption: 'No captions available', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/captions prerecorded.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#captions prerecorded',
    }
);

const sc_1_2_3 = new SuccessCriterion(
    '1.2.3',
    'Audio Description or Media Alternative (Prerecorded)',
    'A',
    'Provide audio descriptions or a media alternative for video content.',
    {
        type: '',
        note: 'Examples for SC 1.2.3',
        items: [
            { id: 'pass', uri: 'pass_1_2_3.png', alt: 'AD track available', caption: 'Audio description explains visuals', isPassing: true },
            { id: 'fail', uri: 'fail_1_2_3.png', alt: 'No AD track', caption: 'Important visuals not described', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/audio description or media alternative prerecorded.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#audio description or media alternative prerecorded',
    }
);

const g_1_2 = new Guideline(
    '1.2',
    'Time based Media',
    'Provide alternatives for time based media so information is accessible.',
    [sc_1_2_1, sc_1_2_2, sc_1_2_3],
    null
);

/*            Guideline 1.3   Adaptable (3 SC)            */
const sc_1_3_1 = new SuccessCriterion(
    '1.3.1',
    'Info and Relationships',
    'A',
    'Use structure/semantics so information and relationships are programmatically determinable.',
    {
        type: '',
        note: 'Examples for SC 1.3.1',
        items: [
            { id: 'pass', uri: 'pass_1_3_1.png', alt: 'Table with headers', caption: 'Relationships conveyed programmatically', isPassing: true },
            { id: 'fail', uri: 'fail_1_3_1.png', alt: 'Table without headers', caption: 'Relationships not clear to AT', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/info and relationships.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#info and relationships',
    }
);

const sc_1_3_2 = new SuccessCriterion(
    '1.3.2',
    'Meaningful Sequence',
    'A',
    'When order affects meaning, the correct reading sequence is programmatically determinable.',
    {
        type: '',
        note: 'Examples for SC 1.3.2',
        items: [
            { id: 'pass', uri: 'pass_1_3_2.png', alt: 'Logical heading order', caption: 'Reading sequence is logical', isPassing: true },
            { id: 'fail', uri: 'fail_1_3_2.png', alt: 'Visual order differs from DOM', caption: 'Programmatic order wrong', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/meaningful sequence.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#meaningful sequence',
    }
);

const sc_1_3_3 = new SuccessCriterion(
    '1.3.3',
    'Sensory Characteristics',
    'A',
    'Instructions do not rely solely on shape, location, color, or sound.',
    {
        type: '',
        note: 'Examples for SC 1.3.3',
        items: [
            { id: 'pass', uri: 'pass_1_3_3.png', alt: 'Text + icon cues', caption: 'Multiple cues used, not just color', isPassing: true },
            { id: 'fail', uri: 'fail_1_3_3.png', alt: '“Press the green button”', caption: 'Instruction relies on color only', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/sensory characteristics.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#sensory characteristics',
    }
);

const g_1_3 = new Guideline(
    '1.3',
    'Adaptable',
    'Create content that can be presented in different ways without losing information or structure.',
    [sc_1_3_1, sc_1_3_2, sc_1_3_3],
    null
);

const sc_1_4_2 = new SuccessCriterion(
    '1.4.2',
    'Audio Control',
    'A',
    'If audio plays automatically for more than 3 seconds, provide a way to pause, stop, or control volume.',
    {
        type: '',
        note: 'Examples for SC 1.4.2',
        items: [
            { id: 'pass', uri: 'pass_1_4_2.png', alt: 'Audio control present', caption: 'User can pause or stop audio', isPassing: true },
            { id: 'fail', uri: 'fail_1_4_2.png', alt: 'Auto playing audio no controls', caption: 'No user control over audio', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/audio control.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#audio control',
    }
);

const sc_1_4_1 = new SuccessCriterion(
    '1.4.1',
    'Use of Color',
    'A',
    'Don’t rely on color alone to convey information. Provide text, icon, or pattern as an additional cue.',
    {
        type: '',
        note: 'Examples for SC 1.4.1',
        items: [
            {
                id: 'pass',
                uri: 'https://picsum.photos/seed/useofcolor pass/400/240',
                alt: 'Link with an icon and a visible text label',
                caption: 'Not color only (has icon/text)',
                isPassing: true,
            },
            {
                id: 'fail',
                uri: 'https://picsum.photos/seed/useofcolor fail/400/240',
                alt: 'Link that changes color only with no text or icon cue',
                caption: 'Color only cue',
                isPassing: false,
            },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/use of color.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#use of color',
    }
);

const sc_1_4_3 = new SuccessCriterion(
    '1.4.3',
    'Contrast (Minimum)',
    'AA',
    'Normal size text should be at least 4.5:1 contrast. Large text (≥18pt regular or ≥14pt bold) can be 3:1.',
    {
        type: '',
        note: 'Examples for SC 1.4.3',
        items: [
            {
                id: 'pass',
                uri: 'https://picsum.photos/seed/contrast pass/400/240',
                alt: 'Dark gray text on white background',
                caption: 'Pass: 4.8:1 ≥ 4.5:1',
                isPassing: true,
            },
            {
                id: 'fail',
                uri: 'https://picsum.photos/seed/contrast fail/400/240',
                alt: 'Light gray text on white background',
                caption: 'Fail: 2.2:1 < 4.5:1',
                isPassing: false,
            },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/contrast minimum.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#contrast minimum',
    }
);


const quiz_1_4 = new Quiz('1.4', [
    {
        id: 'q1',
        stem: 'What is the minimum contrast ratio for normal body text to meet AA?',
        options: [
            { id: 'a', label: '3:1', isCorrect: false },
            { id: 'b', label: '4.5:1', isCorrect: true },
            { id: 'c', label: '7:1', isCorrect: false },
        ],
    },
    {
        id: 'q2',
        stem: 'Using only color to indicate “required” on a form field is…',
        options: [
            { id: 'a', label: 'Fine if the color is red', isCorrect: false },
            { id: 'b', label: 'Not sufficient for WCAG 1.4.1', isCorrect: true },
            { id: 'c', label: 'Allowed on mobile only', isCorrect: false },
        ],
    },
    {
        id: 'q3',
        stem: 'Large text (18pt or 14pt bold) must have at least what contrast to meet AA?',
        options: [
            { id: 'a', label: '3:1', isCorrect: true },
            { id: 'b', label: '4.5:1', isCorrect: false },
            { id: 'c', label: '7:1', isCorrect: false },
        ],
    },
    {
        id: 'q4',
        stem: 'Large text (18pt or 14pt bold) must have at least what contrast to meet AA?',
        options: [
            { id: 'a', label: '3:1', isCorrect: true },
            { id: 'b', label: '4.5:1', isCorrect: false },
            { id: 'c', label: '7:1', isCorrect: false },
        ],
    },
    {
        id: 'q5',
        stem: 'Large text (18pt or 14pt bold) must have at least what contrast to meet AA?',
        options: [
            { id: 'a', label: '3:1', isCorrect: true },
            { id: 'b', label: '4.5:1', isCorrect: false },
            { id: 'c', label: '7:1', isCorrect: false },
        ],
    },
]);

const g_1_4 = new Guideline(
    '1.4',
    'Distinguishable',
    'Make it easier for users to see and hear content.',
    [sc_1_4_1, sc_1_4_2, sc_1_4_3],
    quiz_1_4
);

const p1 = new Principle(
    '1',
    'Perceivable',
    'Information and UI components must be presentable to users in ways they can perceive.',
    [g_1_1, g_1_2, g_1_3, g_1_4]
);

/*                                                                            */
/*                                PRINCIPLE 2                                 */
/*                                (Operable)                                  */
/*                                                                            */

/*            2.1 Keyboard Accessible            */
const sc_2_1_1 = new SuccessCriterion(
    '2.1.1',
    'Keyboard',
    'A',
    'All functionality is available from a keyboard.',
    {
        type: '',
        note: 'Examples for SC 2.1.1',
        items: [
            { id: 'pass', uri: 'pass_2_1_1.png', alt: 'Interactive controls operable via keyboard', caption: 'Full keyboard access', isPassing: true },
            { id: 'fail', uri: 'fail_2_1_1.png', alt: 'Control only clickable with mouse', caption: 'Keyboard trap or no access', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#keyboard',
    }
);

const sc_2_1_2 = new SuccessCriterion(
    '2.1.2',
    'No Keyboard Trap',
    'A',
    'Keyboard focus is not trapped in any component.',
    {
        type: '',
        note: 'Examples for SC 2.1.2',
        items: [
            { id: 'pass', uri: 'pass_2_1_2.png', alt: 'Dialog with escapable focus', caption: 'Focus moves in and out', isPassing: true },
            { id: 'fail', uri: 'fail_2_1_2.png', alt: 'Focus stuck in widget', caption: 'Cannot escape with keyboard', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/no keyboard trap.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#no keyboard trap',
    }
);

const sc_2_1_4 = new SuccessCriterion(
    '2.1.4',
    'Character Key Shortcuts',
    'A',
    'Single character shortcuts can be turned off, remapped, or only active on focus.',
    {
        type: '',
        note: 'Examples for SC 2.1.4',
        items: [
            { id: 'pass', uri: 'pass_2_1_4.png', alt: 'Shortcut customization UI', caption: 'Shortcuts can be remapped', isPassing: true },
            { id: 'fail', uri: 'fail_2_1_4.png', alt: 'Global single key shortcuts', caption: 'No way to disable/remap', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/character key shortcuts.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#character key shortcuts',
    }
);

const g_2_1 = new Guideline(
    '2.1',
    'Keyboard Accessible',
    'Make all functionality available from a keyboard.',
    [sc_2_1_1, sc_2_1_2, sc_2_1_4],
    null
);

/*            2.2 Enough Time            */
const sc_2_2_1 = new SuccessCriterion(
    '2.2.1',
    'Timing Adjustable',
    'A',
    'Provide options to turn off, adjust, or extend time limits.',
    {
        type: '',
        note: 'Examples for SC 2.2.1',
        items: [
            { id: 'pass', uri: 'pass_2_2_1.png', alt: 'Session timeout extend dialog', caption: 'Extend time before expiry', isPassing: true },
            { id: 'fail', uri: 'fail_2_2_1.png', alt: 'Silent timeout', caption: 'User loses work without warning', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/timing adjustable.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#timing adjustable',
    }
);

const sc_2_2_2 = new SuccessCriterion(
    '2.2.2',
    'Pause, Stop, Hide',
    'A',
    'Moving, blinking, scrolling, or auto updating content can be paused, stopped, or hidden.',
    {
        type: '',
        note: 'Examples for SC 2.2.2',
        items: [
            { id: 'pass', uri: 'pass_2_2_2.png', alt: 'Carousel with pause control', caption: 'User can pause animation', isPassing: true },
            { id: 'fail', uri: 'fail_2_2_2.png', alt: 'Auto rotating carousel', caption: 'No pause/stop/hide control', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/pause stop hide.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#pause stop hide',
    }
);

const sc_2_2_6 = new SuccessCriterion(
    '2.2.6',
    'Timeouts',
    'AAA' /* Informational; you asked to avoid AAA in content, but this title might remind you. You can remove if desired. */,
    'Users are warned of any inactivity timeout that could result in data loss.',
    {
        type: '',
        note: 'Examples for SC 2.2.6 (optional informational)',
        items: [
            { id: 'pass', uri: 'pass_2_2_6.png', alt: 'Notice of impending timeout', caption: 'User warned before timeout', isPassing: true },
            { id: 'fail', uri: 'fail_2_2_6.png', alt: 'No timeout notice', caption: 'Unexpected data loss', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/timeouts.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#timeouts',
    }
);

// NOTE: You requested no AAA. If you prefer, delete sc_2_2_6 entirely and keep two SCs only.
const g_2_2 = new Guideline(
    '2.2',
    'Enough Time',
    'Give users sufficient time to read and interact.',
    [sc_2_2_1, sc_2_2_2 /*, sc_2_2_6 */],
    null
);

/*            2.3 Seizures and Physical Reactions            */
const sc_2_3_1 = new SuccessCriterion(
    '2.3.1',
    'Three Flashes or Below Threshold',
    'A',
    'Content does not flash more than three times per second, or is below general flash thresholds.',
    {
        type: '',
        note: 'Examples for SC 2.3.1',
        items: [
            { id: 'pass', uri: 'pass_2_3_1.png', alt: 'No flashing', caption: 'No seizure triggering flashes', isPassing: true },
            { id: 'fail', uri: 'fail_2_3_1.png', alt: 'Rapid flashing content', caption: 'Flashes exceed threshold', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/three flashes or below threshold.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#three flashes or below threshold',
    }
);

const sc_2_3_3 = new SuccessCriterion(
    '2.3.3',
    'Animation from Interactions',
    'AAA',
    'Motion animation triggered by interaction can be disabled.',
    {
        type: '',
        note: 'Examples for SC 2.3.3 (AAA   remove if not desired)',
        items: [
            { id: 'pass', uri: 'pass_2_3_3.png', alt: 'Setting to reduce motion', caption: 'User can disable motion', isPassing: true },
            { id: 'fail', uri: 'fail_2_3_3.png', alt: 'No motion control', caption: 'Motion cannot be disabled', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/animation from interactions.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#animation from interactions',
    }
);

const g_2_3 = new Guideline(
    '2.3',
    'Seizures and Physical Reactions',
    'Do not design content in a way that causes seizures or physical reactions.',
    [sc_2_3_1 /* no AAA if you prefer */],
    null
);

/*            2.4 Navigable            */
const sc_2_4_1 = new SuccessCriterion(
    '2.4.1',
    'Bypass Blocks',
    'A',
    'Provide a way to skip blocks of repeated content.',
    {
        type: '',
        note: 'Examples for SC 2.4.1',
        items: [
            { id: 'pass', uri: 'pass_2_4_1.png', alt: 'Skip to main link visible on focus', caption: 'Bypass repeated navigation', isPassing: true },
            { id: 'fail', uri: 'fail_2_4_1.png', alt: 'No skip links', caption: 'Users must tab through everything', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/bypass blocks.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#bypass blocks',
    }
);

const sc_2_4_3 = new SuccessCriterion(
    '2.4.3',
    'Focus Order',
    'A',
    'If a page can be navigated sequentially and the order affects meaning, focus order preserves meaning.',
    {
        type: '',
        note: 'Examples for SC 2.4.3',
        items: [
            { id: 'pass', uri: 'pass_2_4_3.png', alt: 'Logical tab order', caption: 'Meaningful focus order', isPassing: true },
            { id: 'fail', uri: 'fail_2_4_3.png', alt: 'Jumbled tab order', caption: 'Focus jumps unpredictably', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/focus order.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#focus order',
    }
);

const sc_2_4_5 = new SuccessCriterion(
    '2.4.5',
    'Multiple Ways',
    'AA',
    'Provide more than one way to locate a web page (except where it is a step in a process).',
    {
        type: '',
        note: 'Examples for SC 2.4.5',
        items: [
            { id: 'pass', uri: 'pass_2_4_5.png', alt: 'Search, sitemap, and navigation', caption: 'Multiple ways to find pages', isPassing: true },
            { id: 'fail', uri: 'fail_2_4_5.png', alt: 'Only one navigation method', caption: 'Single narrow access path', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/multiple ways.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#multiple ways',
    }
);

const g_2_4 = new Guideline(
    '2.4',
    'Navigable',
    'Help users navigate, find content, and determine where they are.',
    [sc_2_4_1, sc_2_4_3, sc_2_4_5],
    null
);

/*            2.5 Input Modalities            */
const sc_2_5_1 = new SuccessCriterion(
    '2.5.1',
    'Pointer Gestures',
    'A',
    'All functionality that uses complex gestures can be operated with a single pointer without path based gestures.',
    {
        type: '',
        note: 'Examples for SC 2.5.1',
        items: [
            { id: 'pass', uri: 'pass_2_5_1.png', alt: 'Alternative to pinch zoom', caption: 'Provide simple pointer alternative', isPassing: true },
            { id: 'fail', uri: 'fail_2_5_1.png', alt: 'Only path based gesture', caption: 'No simple alternative', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/pointer gestures.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#pointer gestures',
    }
);

const sc_2_5_2 = new SuccessCriterion(
    '2.5.2',
    'Pointer Cancellation',
    'A',
    'For functionality that can be operated with a single pointer, at least one of: no down event activation, abort/cancel, or undo.',
    {
        type: '',
        note: 'Examples for SC 2.5.2',
        items: [
            { id: 'pass', uri: 'pass_2_5_2.png', alt: 'Confirm before destructive tap', caption: 'Allow cancel/undo', isPassing: true },
            { id: 'fail', uri: 'fail_2_5_2.png', alt: 'Action completes on touch down', caption: 'No chance to cancel', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/pointer cancellation.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#pointer cancellation',
    }
);

const sc_2_5_3 = new SuccessCriterion(
    '2.5.3',
    'Label in Name',
    'A',
    'The accessible name contains the text presented visually for UI components with labels.',
    {
        type: '',
        note: 'Examples for SC 2.5.3',
        items: [
            { id: 'pass', uri: 'pass_2_5_3.png', alt: 'Button labeled “Search” and name includes “Search”', caption: 'Visible label matches accessible name', isPassing: true },
            { id: 'fail', uri: 'fail_2_5_3.png', alt: 'Button shows “Search” but name is “Go”', caption: 'Mismatch confuses speech users', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/label in name.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#label in name',
    }
);

const g_2_5 = new Guideline(
    '2.5',
    'Input Modalities',
    'Make it easier for users to operate functionality through various inputs beyond keyboard.',
    [sc_2_5_1, sc_2_5_2, sc_2_5_3],
    null
);

/* Principle 2 bundle */
const p2 = new Principle(
    '2',
    'Operable',
    'User interface components and navigation must be operable.',
    [g_2_1, g_2_2, g_2_3, g_2_4, g_2_5]
);

/*                                                                            */
/*                               PRINCIPLE 3                                  */
/*                             (Understandable)                               */
/*                                                                            */

/*            3.1 Readable            */
const sc_3_1_1 = new SuccessCriterion(
    '3.1.1',
    'Language of Page',
    'A',
    'The default human language of the page can be programmatically determined.',
    {
        type: '',
        note: 'Examples for SC 3.1.1',
        items: [
            { id: 'pass', uri: 'pass_3_1_1.png', alt: 'lang set on html', caption: 'Primary language is declared', isPassing: true },
            { id: 'fail', uri: 'fail_3_1_1.png', alt: 'no lang attribute', caption: 'Language not declared', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/language of page.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#language of page',
    }
);

const sc_3_1_2 = new SuccessCriterion(
    '3.1.2',
    'Language of Parts',
    'AA',
    'The human language of each passage or phrase can be programmatically determined.',
    {
        type: '',
        note: 'Examples for SC 3.1.2',
        items: [
            { id: 'pass', uri: 'pass_3_1_2.png', alt: 'Inline phrase marked lang=es', caption: 'Language changes marked up', isPassing: true },
            { id: 'fail', uri: 'fail_3_1_2.png', alt: 'Foreign phrase unmarked', caption: 'Assistive tech cannot switch language', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/W3C/WAI/WCAG21/Understanding/language of parts.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#language of parts',
    }
);

const sc_3_1_6 = new SuccessCriterion(
    '3.1.6',
    'Pronunciation',
    'AAA',
    'Provide pronunciation where needed to clarify meaning.',
    null,
    null
); // (exclude when filtering to A/AA)

const g_3_1 = new Guideline(
    '3.1',
    'Readable',
    'Make text content readable and understandable.',
    [sc_3_1_1, sc_3_1_2], // (omit AAA)
    null
);

/*            3.2 Predictable            */
const sc_3_2_1 = new SuccessCriterion(
    '3.2.1',
    'On Focus',
    'A',
    'When any component receives focus, it does not initiate a change of context.',
    {
        type: '',
        note: 'Examples for SC 3.2.1',
        items: [
            { id: 'pass', uri: 'pass_3_2_1.png', alt: 'Focus does not trigger navigation', caption: 'Focus is passive', isPassing: true },
            { id: 'fail', uri: 'fail_3_2_1.png', alt: 'Focus causes page change', caption: 'Unexpected context change', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/on focus.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#on focus',
    }
);

const sc_3_2_2 = new SuccessCriterion(
    '3.2.2',
    'On Input',
    'A',
    'Changing the setting of any user interface component does not automatically cause a change of context unless advised.',
    {
        type: '',
        note: 'Examples for SC 3.2.2',
        items: [
            { id: 'pass', uri: 'pass_3_2_2.png', alt: 'Input requires explicit submit', caption: 'No auto redirect on change', isPassing: true },
            { id: 'fail', uri: 'fail_3_2_2.png', alt: 'Select auto navigates', caption: 'Change triggers context switch', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/on input.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#on input',
    }
);

const sc_3_2_3 = new SuccessCriterion(
    '3.2.3',
    'Consistent Navigation',
    'AA',
    'Navigation components that are repeated across pages occur in the same relative order.',
    {
        type: '',
        note: 'Examples for SC 3.2.3',
        items: [
            { id: 'pass', uri: 'pass_3_2_3.png', alt: 'Consistent header nav across pages', caption: 'Same relative order each page', isPassing: true },
            { id: 'fail', uri: 'fail_3_2_3.png', alt: 'Header changes order per page', caption: 'Inconsistent navigation order', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/consistent navigation.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#consistent navigation',
    }
);

const g_3_2 = new Guideline(
    '3.2',
    'Predictable',
    'Make pages appear and operate in predictable ways.',
    [sc_3_2_1, sc_3_2_2, sc_3_2_3],
    null
);

/*            3.3 Input Assistance            */
const sc_3_3_1 = new SuccessCriterion(
    '3.3.1',
    'Error Identification',
    'A',
    'If an input error is automatically detected, the item in error is identified and the error is described to the user.',
    {
        type: 'images',
        note: 'Examples for SC 3.3.1',
        items: [
            { id: 'pass', uri: require('../assets/examples/pass_3_3_1.png'), alt: 'Inline error with text', caption: 'Error is identified and described', isPassing: true },
            { id: 'fail', uri: require('../assets/examples/fail_3_3_1.png'), alt: 'Only red border', caption: 'Relies on color only, no message', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/error identification.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#error identification',
    }
);

const sc_3_3_2 = new SuccessCriterion(
    '3.3.2',
    'Labels or Instructions',
    'A',
    'Labels or instructions are provided when content requires user input.',
    {
        type: '',
        note: 'Examples for SC 3.3.2',
        items: [
            { id: 'pass', uri: 'pass_3_3_2.png', alt: 'Form labels are present', caption: 'Clear, associated labels', isPassing: true },
            { id: 'fail', uri: 'fail_3_3_2.png', alt: 'Fields without labels', caption: 'Ambiguous inputs', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/labels or instructions.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#labels or instructions',
    }
);

const sc_3_3_3 = new SuccessCriterion(
    '3.3.3',
    'Error Suggestion',
    'AA',
    'If an input error is automatically detected and suggestions for correction are known, they are provided to the user.',
    {
        type: '',
        note: 'Examples for SC 3.3.3',
        items: [
            { id: 'pass', uri: 'pass_3_3_3.png', alt: 'Error message suggests valid format', caption: 'Actionable suggestions', isPassing: true },
            { id: 'fail', uri: 'fail_3_3_3.png', alt: 'Generic error without hint', caption: 'No correction guidance', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/error suggestion.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#error suggestion',
    }
);

const g_3_3 = new Guideline(
    '3.3',
    'Input Assistance',
    'Help users avoid and correct mistakes.',
    [sc_3_3_1, sc_3_3_2, sc_3_3_3],
    null
);

/* Principle 3 bundle */
const p3 = new Principle(
    '3',
    'Understandable',
    'Information and the operation of user interface must be understandable.',
    [g_3_1, g_3_2, g_3_3]
);

/*                                                                            */
/*                                PRINCIPLE 4                                 */
/*                                 (Robust)                                   */
/*                                                                            */

/*            4.1 Compatible            */
const sc_4_1_1 = new SuccessCriterion(
    '4.1.1',
    'Parsing',
    'A',
    'Ensure content can be parsed by user agents: no duplicate IDs, properly nested elements, valid markup.',
    {
        type: '',
        note: 'Examples for SC 4.1.1',
        items: [
            { id: 'pass', uri: 'pass_4_1_1.png', alt: 'Valid markup', caption: 'No validation errors', isPassing: true },
            { id: 'fail', uri: 'fail_4_1_1.png', alt: 'Broken tags', caption: 'Markup errors break parsing', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/parsing.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#parsing',
    }
);

const sc_4_1_2 = new SuccessCriterion(
    '4.1.2',
    'Name, Role, Value',
    'A',
    'For all UI components, the name, role, value, states, and properties can be programmatically determined and set.',
    {
        type: '',
        note: 'Examples for SC 4.1.2',
        items: [
            { id: 'pass', uri: 'pass_4_1_2.png', alt: 'Control with proper ARIA', caption: 'Exposes name, role, value', isPassing: true },
            { id: 'fail', uri: 'fail_4_1_2.png', alt: 'Custom control without roles', caption: 'AT cannot interact properly', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/name role value.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#name role value',
    }
);

const sc_4_1_3 = new SuccessCriterion(
    '4.1.3',
    'Status Messages',
    'AA',
    'Status messages can be programmatically determined through role or properties without receiving focus.',
    {
        type: '',
        note: 'Examples for SC 4.1.3',
        items: [
            { id: 'pass', uri: 'pass_4_1_3.png', alt: 'Live region announcing update', caption: 'Announcements without focus change', isPassing: true },
            { id: 'fail', uri: 'fail_4_1_3.png', alt: 'Silent content change', caption: 'No programmatic status', isPassing: false },
        ],
    },
    {
        understandingUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/status messages.html',
        specUrl: 'https://www.w3.org/TR/WCAG21/#status messages',
    }
);

const g_4_1 = new Guideline(
    '4.1',
    'Compatible',
    'Maximize compatibility with current and future user agents, including assistive technologies.',
    [sc_4_1_1, sc_4_1_2, sc_4_1_3],
    null
);

/* Principle 4 bundle */
const p4 = new Principle(
    '4',
    'Robust',
    'Content must be robust enough to be interpreted by a wide variety of user agents, including assistive technologies.',
    [g_4_1]
);


/*                                                                            */

const PRINCIPLES = [p1, p2, p3, p4];

export function getPrinciples() {
    return PRINCIPLES;
}

export function getGuidelinesByPrinciple(principleId) {
    const p = PRINCIPLES.find((x) => x.id === String(principleId));
    return p ? p.guidelines : [];
}

export function getGuideline(principleId, guidelineId) {
    const gs = getGuidelinesByPrinciple(principleId);
    return gs.find((g) => g.id === String(guidelineId)) || null;
}

export function getSCs(principleId, guidelineId) {
    const g = getGuideline(principleId, guidelineId);
    return g ? g.successCriteria : [];
}

export function getSC(principleId, guidelineId, scId) {
    const list = getSCs(principleId, guidelineId);
    return list.find((x) => x.id === String(scId)) || null;
}
