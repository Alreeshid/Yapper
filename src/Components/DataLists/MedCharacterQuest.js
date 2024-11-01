export const  medList =
    [
        {
            qId: 1,
            qNum: 1,
            qType: "text",
            qQuest: "Before we start, do you have a core idea for your character? This can be vague or incredibly specific.",
            qPlaceholder: "Example: Don Quixote with a gun, Harry Potter with Norse mythology, etc.",
            qNumFollowUp: 0,
            qResponse: "",
        },
        {
            qId: 2,
            qNum: 2,
            qType: "text",
            qQuest: "What's your character's name?",
            qPlaceholder: "Ron Johnson, goes by David Hachernoff. He was misplaced at birth alongside the real David Hachernoff",
            qNumFollowUp: 1,
            qResponse: "",
            qFollowers: [
                {
                    qId: 3,
                    qNum: 5.5,
                    qType: "text",
                    qQuest: "Is this name the same as their birth name? If not, why do they not go by their birth name?",
                    qPlaceholder: "I.E. - My character has transitioned, a nickname has stuck, they don't know their birth name, ETC.",
                    qNumFollowUp: 0,
                    qResponse: "",
                }
            ]},
        {
            qId: 4,
            qNum: 3,
            qType: "text",
            qQuest: "Where was your character born, and where do they currently live?",
            qPlaceholder: "Born in Nevada, but moved to New York City when they were 12.",
            qNumFollowUp: 0,
            qResponse: "",
        },
        {
            qId: 5,
            qNum: 4,
            qType: "text",
            qQuest: "Who are their birth parents? Keep in mind that parental relationships can be complex and add quite a bit of depth into your character.",
            qPlaceholder: "John and Mary Berkley - who run a traveling circus in Nevada.",
            qNumFollowUp: 0,
            qResponse: "",
        },
        {
            qId: 6,
            qNum: 5,
            qType: "choice",//make a dropdown selection
            qQuest: "Does your character consider their birth parents as their real parents, or do they look to someone else in that light? This can also apply if they do not know their real parents.",
            qChoices: [{
                id: 1,
                text: "They know their birth parents - and see them as their real parents/mentors"
            },
            {
                id: 2,
                text: "They know their birth parents but see someone else as their real parent(s)/mentor(s)"
            },
            {
                id: 3,
                text: "They do not know their birth parents, but see their adopted (or otherwise) parents as real"
            },
            {
                id: 4,
                text: "They do not know their birth parents, and do not feel that their adopted (or otherwise) parents are true parents/mentors"
            },
            {
                id: 5,
                text: "Other"
            }],
            qPlaceholder: "Consider how this will impact not just this relationship, but their worldview as well.",
            qNumFollowUp: 1,
            qResponse: "Other",
            qFollowers: [{
                qId: 7,
                qNum: 5.5,
                qType: "text",
                qQuest: "You selected 'Other' in the previous question - elaborate on that choice a little more - Otherwise skip:",
                qPlaceholder: "I.E. - My character knows that they were taken from their real parents as a child, but was convinced by their 'adopted' parents that this was for the best. They are not aware their birth parents are dead at the hands of their adopted parents.",
                qNumFollowUp: 0,
                qResponse: "",
            }]
        },
        {
            qId: 8,
            qNum: 6,
            qType: "text",
            qQuest: "Consider your previous choice - what was life like for them growing up with their parents(if they had any). Think about the positives and negatives.",
            qPlaceholder: "Their parents cared for them, but were unaware that they were bullied for most of their childhood. Even now they feel spite towards their family for not noticing.",
            qNumFollowUp: 0,
            qResponse: "",
        },
        {
            qId: 9,
            qNum: 7,
            qType: "text",
            qQuest: "Describe your character. You can keep it vague, but consider details that may have significance.",
            qPlaceholder: "Female, brown hair, blue eyes, has a meek personality but wears a scowl most days",
            qNumFollowUp: 0,
            qResponse: "",
        },
        {
            qId: 10,
            qNum: 8,
            qType: "yesNo",
            qQuest: "Does your character have any scars, debilitations, disabilities, etc.?",
            qPlaceholder: "",
            qNumFollowUp: 2,
            qResponse: "Yes",
            qFollowers: [{
                qId: 11,
                qNum: 8.3,
                qType: "text",
                qQuest: "You answered 'Yes', describe them, vaguely or in detail. If you answered no, skip this question",
                qPlaceholder: "Has a limp due to breaking their leg in a soccer game as a child.",
                qNumFollowUp: 1,
                qResponse: "",
            },
            {
                qId: 12,
                qNum: 8.6,
                qType: "text",
                qQuest: "How do these details define them, and how does it effect their day-to-day life? Consider also how this may play into scenes in your story.",
                qPlaceholder: "They got their scar from a bear attack then they were young. They fear camping, and even seeing bears in enclosures.",
                qNumFollowUp: 0,
                qResponse: "",
            },
            ]
        },

        {
            qId: 12,
            qNum: 9,
            qType: "text",
            qQuest: "How old is your character, and how long do they expect to live? **This is often determined by the setting your character is in.",
            qPlaceholder: "80 years old, but as an elf they expect to live for several hundred years.",
            qNumFollowUp: 0,
            qResponse: "",
        },
        {
            qId: 13,
            qNum: 10,
            qType: "text",
            qQuest: "Most people have dreams or aspirations, even if they're small. What about your character?",
            qPlaceholder: "They just want to get by and live a peaceful life.",
            qNumFollowUp: 0,
            qResponse: "",
        },
        {
            qId: 14,
            qNum: 11,
            qType: "text",
            qQuest: "How does your character see themselves, positively or negatively? When they look in the mirror, do they see an accurate 'them'?",
            qPlaceholder: "Example: Lacks a positive self image, thinks their social skills aren't very good.",
            qNumFollowUp: 0,
            qResponse: "",
        },
        {
            qId: 15,
            qNum: 12,
            qType: "text",
            qQuest: "Finally, consider their relationships. Who does your character know, how do they know them, and how do they feel about them? For a story, these relationships can be minor, or incredibly important. Feel free to write a brief list, or just one or two characters!",
            qPlaceholder: "-Best friends with some of the local homeless population",
            qNumFollowUp: 0,
            qResponse: "",
        },
    ]