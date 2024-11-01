export const longList =
  [
    {
      qId: 0,
      qNum: 1,
      qType: "text",
      qQuest: "Type Yes into the chatbox if you want to see how followups work, or anything else to proceed:",
      qPlaceholder: "(:",
      qNumFollowUp: 8,
      qResponse: "Yes",
      qFollowers: [{
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
        qQuest: "What's your character's birth name, and do they go by it? If not, why don't they",
        qPlaceholder: "Ron Johnson, goes by David Hachernoff. He was misplaced at birth alongside the real David Hachernoff",
        qNumFollowUp: 0,
        qResponse: "",
      },
      {
        qId: 3,
        qNum: 3,
        qType: "text",
        qQuest: "Where was your character born, and where do they currently live?",
        qPlaceholder: "Born in Nevada, but moved to New York City when they were 12.",
        qNumFollowUp: 0,
        qResponse: "",
      },
      {
        qId: 4,
        qNum: 4,
        qType: "text",
        qQuest: "Who are their birth parents?",
        qPlaceholder: "John and Mary Berkley - who run a traveling circus in Nevada.",
        qNumFollowUp: 0,
        qResponse: "",
      },
      {
        qId: 5,
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
          qId: 6,
          qNum: 5.5,
          qType: "text",
          qQuest: "If you selected 'Other' in the previous question - elaborate on that choice a little more - Otherwise skip:",
          qPlaceholder: "I.E. - My character knows that they were taken from their real parents as a child, but was convinced by their 'adopted' parents that this was for the best. They are not aware their birth parents are dead at the hands of their adopted parents.",
          qNumFollowUp: 0,
          qResponse: "",
        }]
      },
      {
        qId: 7,
        qNum: 6,
        qType: "text",
        qQuest: "Consider your previous choice - what was life like for them growing up with their parents(if they had any). Think about the positives and negatives.",
        qPlaceholder: "Their parents cared for them, but were unaware that they were bullied for most of their childhood. Even now they feel spite towards their family for not noticing.",
        qNumFollowUp: 0,
        qResponse: "",
      },
      {
        qId: 8,
        qNum: 7,
        qType: "text",
        qQuest: "Describe your character. You can keep it vague, but consider details that may have significance.",
        qPlaceholder: "Female, brown hair, blue eyes, has a meek personality but wears a scowl most days",
        qNumFollowUp: 0,
        qResponse: "",
      }]
    },
    {
      qId: 15,
      qNum: 12,
      qType: "text",
      qQuest: "Happy? (:",
      qPlaceholder: "No?",
      qNumFollowUp: 0,
      qResponse: "",
    },
  

  ]