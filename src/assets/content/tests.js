export const TESTS = [
    {
        page: 1,
        title: 'Sample Listening Goldasso <i>Multiple Choice (one answer)</i>',
        answer: {
            type: 'radios',
            question: 'Questions 1 – 3',
            number: 3,
            description: 'Choose the correct answer.',
            title: '',
            content: [
                {
                    id: 1,
                    correctAnswer: 'She wanted to understand her own background',
                    question: '<b>1</b>Why did golasso choose to study the East End of London?',
                    answers: [
                        { id: 1, content: 'She wanted to understand her own background.' },
                        { id: 2, content: 'She was interested in place names.' },
                        { id: 3, content: 'She had read several books about it.' },
                    ],
                },
                {
                    id: 2,
                    correctAnswer: 'newspapers',
                    question: '<b>2</b>What was Judy’s main source of materials?',
                    answers: [
                        { id: 1, content: 'books' },
                        { id: 2, content: 'newspapers' },
                        { id: 3, content: 'interviews' },
                    ],
                },
                {
                    id: 3,
                    correctAnswer: 'finding enough relevant sources',
                    question: '<b>3</b>What difficulty did Judy have with her dissertation?',
                    answers: [
                        { id: 1, content: 'writing the first draft' },
                        { id: 2, content: 'organising what she had collected' },
                        { id: 3, content: 'finding enough relevant sources' },
                    ],
                },
            ],
        },
    },
    {
        page: 2,
        title: 'Sample Listening <i>Short Answer Questions</i>',
        answer: {
            type: 'inputTexts in paragraphs',
            question: 'Questions 4 – 6',
            number: 3,
            description:
                'Answer the questions. Write <b>ONE WORD ONLY</b> in each gap.<br/><br/>List <b>THREE</b> types of staff that Pacific Clothing want to recruit at present.',
            title: '',
            className: 'with-bullets-points',
            content: [
                {
                    id: 4,
                    correctAnswer: 'apple',
                    answers: [' '],
                },
                {
                    id: 5,
                    correctAnswer: 'book',
                    answers: [' '],
                },
                {
                    id: 6,
                    correctAnswer: 'pencil',
                    answers: [' '],
                },
            ],
        },
    },
    {
        page: 3,
        questionType: 'drop in answer part',
        title: 'Sample Listening <i>Matching (Sample Task A)</i>',
        answer: {
            type: 'dragNDrop',
            question: 'Questions 7 – 11',
            number: 5,
            description:
                'Who is responsible for each area? Choose the correct answer and move it into the gap.',
            title: 'People',
            className: 'listening',
            content: [
                {
                    id: 7,
                    correctAnswer: 'Finance',
                    answers: 'Mary Brown',
                },
                {
                    id: 8,
                    correctAnswer: 'Food',
                    answers: 'John Stevens',
                },
                {
                    id: 9,
                    correctAnswer: 'Rooms',
                    answers: 'Alison Jones',
                },
                {
                    id: 10,
                    correctAnswer: 'Sport',
                    answers: 'Tim Smith',
                },
                {
                    id: 11,
                    correctAnswer: "Kid's Counselling",
                    answers: 'Jenny James',
                },
            ],
            dragItems: [
                'Finance',
                'Food',
                'Health',
                "Kid's Counselling",
                'Organisation',
                'Rooms',
                'Sport',
                'Trips',
            ],
        },
    },
    {
        page: 4,
        title: 'Sample Listening <i>Plan/Map/Diagram Labelling</i>',
        answer: {
            type: 'table inputs',
            question: 'Questions 12 – 14',
            number: 3,
            description:
                'The map has eight labels <b>(A – H)</b>. Choose the correct label for each building.',
            title: '',
            className: 'table-inputs',
            content: [
                {
                    id: 12,
                    correctAnswer: 'A',
                    answers: 'Quilt Shop',
                },
                {
                    id: 13,
                    correctAnswer: 'B',
                    answers: 'Handicrafts Museum',
                },
                {
                    id: 14,
                    correctAnswer: 'C',
                    answers: 'School House',
                },
            ],
            answersIndex: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
        },
    },
    {
        page: 5,
        title: 'Sample Listening <i>(Note Completion)</i>',
        answer: {
            type: 'inputTexts in paragraphs',
            question: 'Questions 15 – 21',
            number: 7,
            description: 'Complete the notes. Write <b>ONE WORD AND/OR A NUMBER</b> in each gap.',
            title: 'Phone call about second-hand furniture',
            className: 'without-bullets-points',
            content: [
                {
                    id: 15,
                    correctAnswer: 'car',
                    answers: [
                        '<p><b>Items</b></p><span style="margin-right: 30px">Dining table</span>- ',
                        '  shape<span class="second-line" style="margin-left:105px">- medium size</span>',
                    ],
                },
                {
                    id: 16,
                    correctAnswer: 'young',
                    answers: [
                        '<span style="margin-right:105px"></span>- ',
                        '  old<span class="second-line" style="margin-left:105px">- £25.00</span>',
                    ],
                },
                {
                    id: 17,
                    correctAnswer: 'couple',
                    answers: [
                        '<span style="margin-right:24px">Dining chairs</span>- set of&nbsp;&nbsp;',
                        '  chairs',
                    ],
                },
                {
                    id: 18,
                    correctAnswer: 'soft',
                    answers: [
                        '<span style="margin-right:105px"></span>- seats covered in&nbsp;&nbsp;',
                        '  material',
                    ],
                },
                {
                    id: 19,
                    correctAnswer: 'air',
                    answers: [
                        '<span style="margin-right:105px"></span>- in&nbsp;&nbsp;',
                        '  condition<span class="second-line" style="margin-left:105px">- £20.00</span>',
                    ],
                },
                {
                    id: 20,
                    correctAnswer: 'meters',
                    answers: [
                        '<span style="margin-right:73px">Desk</span>- length:&nbsp;&nbsp;',
                        '',
                    ],
                },
                {
                    id: 21,
                    correctAnswer: 'pet and cats',
                    answers: [
                        '<span style="margin-right:105px"></span>- 3 drawers. Top drawer has a&nbsp;&nbsp;',
                        '<span class="second-line" style="margin-left:105px">- £50.00</span>',
                    ],
                },
            ],
        },
    },
    {
        page: 6,
        title: 'Sample Listening <i>Short Answer Questions</i>',
        answer: {
            type: 'inputTexts in paragraphs',
            question: 'Questions 22 – 24',
            number: 3,
            description:
                'Answer the questions. Write <b>ONE WORD ONLY</b> in each gap.<br/><br/>List <b>THREE</b> types of staff that Pacific Clothing want to recruit at present.',
            title: '',
            className: 'with-bullets-points',
            content: [
                {
                    id: 22,
                    correctAnswer: 'pen',
                    answers: [' '],
                },
                {
                    id: 23,
                    correctAnswer: 'food',
                    answers: [' '],
                },
                {
                    id: 24,
                    correctAnswer: 'water',
                    answers: [' '],
                },
            ],
        },
    },
    {
        page: 7,
        title: 'Sample Listening <i>Short Answer Questions</i>',
        answer: {
            type: 'inputTexts in paragraphs',
            question: 'Questions 25-27',
            number: 3,
            description:
                'Answer the questions. Write <b>ONE WORD ONLY</b> in each gap.<br/><br/>List <b>THREE</b> types of staff that Pacific Clothing want to recruit at present.',
            title: '',
            className: 'with-bullets-points',
            content: [
                {
                    id: 25,
                    correctAnswer: 'carpet',
                    answers: [' '],
                },
                {
                    id: 26,
                    correctAnswer: 'cloth',
                    answers: [' '],
                },
                {
                    id: 27,
                    correctAnswer: 'candle',
                    answers: [' '],
                },
            ],
        },
    },
    {
        page: 8,
        title: 'Sample Listening <i>Multiple Choice (more than one answer)</i>',
        answer: {
            type: 'checkboxes',
            question: 'Questions 28 – 30',
            number: 3,
            description: 'Choose <b>THREE</b> correct answers.',
            title: '',
            content: [
                {
                    id: 28,
                    correctAnswer: ['catalogue', 'location of rooms', 'café'],
                    question: `<strong>28 – 30</strong>&nbsp;&nbsp;&nbsp;Which <strong>THREE</strong> things does the Guide to the Library have information about?`,
                    answers: [
                        { id: 1, content: 'book reservations' },
                        { id: 2, content: 'reading room rules' },
                        { id: 3, content: 'catalogue' },
                        { id: 4, content: 'disabled facilities' },
                        { id: 5, content: 'location of rooms' },
                        { id: 6, content: 'café' },
                        { id: 7, content: 'regular events' },
                        { id: 8, content: 'staff' },
                    ],
                },
            ],
        },
    },
];
