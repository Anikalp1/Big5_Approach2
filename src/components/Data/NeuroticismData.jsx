const NeuroticismData = {
    title: "Neuroticism",
    description:
      "Neuroticism refers to the tendency to experience negative feelings.",
    categories: [
      "Anxiety",
      "Anger",
      "Depression",
      "Self-Consciousness",
      "Immoderation",
      "Vulnerability",
    ],
    data: [
      {
        title: "Anxiety",
        score: "20 (high)",
        paragraph:
          "The 'fight-or-flight' system of the brain of anxious individuals is too easily and too often engaged. Therefore, people who are high in anxiety often feel like something dangerous is about to happen. They may be afraid of specific situations or be just generally fearful. They feel tense, jittery, and nervous. Persons low in Anxiety are generally calm and fearless.",
      },
      {
        title: "Anger",
        score: "18 (high)",
        paragraph:
          "Persons who score high in Anger feel enraged when things do not go their way. They are sensitive about being treated fairly and feel resentful and bitter when they feel they are being cheated. This scale measures the tendency to feel angry; whether or not the person expresses annoyance and hostility depends on the individual's level on Agreeableness. Low scorers do not get angry often or easily.",
      },
      {
        title: "Depression",
        score: "14 (high)",
        paragraph:
          "This scale measures the tendency to feel sad, dejected, and discouraged. High scorers lack energy and have difficulty initiating activities. Low scorers tend to be free from these depressive feelings.",
      },
      {
        title: "Self-Consciousness",
        score: "20 (high)",
        paragraph:
          "Self-conscious individuals are sensitive about what others think of them. Their concern about rejection and ridicule cause them to feel shy and uncomfortable around others. They are easily embarrassed and often feel ashamed. Their fears that others will criticize or make fun of them are exaggerated and unrealistic, but their awkwardness and discomfort may make these fears a self-fulfilling prophecy. Low scorers, in contrast, do not suffer from the mistaken impression that everyone is watching and judging them. They do not feel nervous in social situations.",
      },
      {
        title: "Immoderation",
        score: "12 (neutral)",
        paragraph:
          "Immoderate individuals feel strong cravings and urges that they have difficulty resisting. They tend to be oriented toward short-term pleasures and rewards rather than long- term consequences. Low scorers do not experience strong, irresistible cravings and consequently do not find themselves tempted to overindulge.",
      },
      {
        title: "Vulnerability",
        score: "18 (high)",
        paragraph:
          "High scorers on Vulnerability experience panic, confusion, and helplessness when under pressure or stress. Low scorers feel more poised, confident, and clear-thinking when stressed.",
      },
    ],
    series: [20, 18, 14, 20, 12, 18],
  };
  
  const Explanation = (
    <p>
      Those who score high on Neuroticism may experience primarily one specific negative feeling such as anxiety, anger, or depression, but are likely to experience several of these emotions.
      <br />
      <br />
      People high in neuroticism are emotionally reactive. They respond emotionally to events that would not affect most people, and their reactions tend to be more intense than normal. They are more likely to interpret ordinary situations as threatening, and minor frustrations as hopelessly difficult.
      <br />
      <br />
      Their negative emotional reactions tend to persist for unusually long periods of time, which means they are often in a bad mood. These problems in emotional regulation can diminish a neurotic's ability to think clearly, make decisions, and cope effectively with stress.
      <br />
      <br />
      Your score on Neuroticism is high, indicating that you are easily upset, even by what most people consider the normal demands of living. People consider you to be sensitive and emotional.
    </p>
  );
  
  export { NeuroticismData, Explanation };
  