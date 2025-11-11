const CARDS = [
  {
    "title": "Echo — Resonance",
    "prompt": "Whose voices echo in GenAI systems? How does AI amplify or silence voices?",
    "context": "GenAI systems learn from vast datasets, which often reflect dominant cultural ideas and biases. UNESCO’s Human-in-the-loop AI principles emphasise human agency, accountability, and inclusive design.",
    "ethical_challenge": "How might legal personhood entities like Te Urewera be represented in GenAI?",
    "ai_pitch": {
      "ethical_awareness": "Identify one underrepresented voice relevant to your proposal.",
      "application_in_practice": "Suggest one intervention that ensures this voice is acknowledged or amplified."
    }
  },
  {
    "title": "Roots — Intertwined",
    "prompt": "What unseen networks support GenAI? Can it grow in relation, not isolation?",
    "context": "AI systems depend on layered networks—technical, human, cultural, and ecological. UNESCO promotes sustainable innovation and guardianship of knowledge.",
    "ethical_challenge": "How might empathy shape the design and maintenance of these networks?",
    "ai_pitch": {
      "ethical_awareness": "Map one human network your proposal interacts with.",
      "application_in_practice": "Propose one way to maintain or strengthen this relationship throughout the proposal’s lifecycle."
    }
  },
  {
    "title": "Drift — Currents",
    "prompt": "Where does data drift to when it leaves its source? Can AI follow flows of forgotten knowledge?",
    "context": "UNESCO emphasises data sovereignty and consent. Data may be reused in ways that violate its original intent.",
    "ethical_challenge": "How can mechanisms that respect provenance, consent, and stewardship be introduced?",
    "ai_pitch": {
      "ethical_awareness": "Acknowledge or respond to human systems contributing to your pitch.",
      "application_in_practice": "Identify one step to ensure respect for original context and purpose."
    }
  },
  {
    "title": "Alloy — Forged",
    "prompt": "What ethical values are fused into GenAI? What tensions arise when hard and soft systems meet?",
    "context": "GenAI prioritises efficiency, which may conflict with inclusivity, sustainability, and justice. UNESCO calls for balance.",
    "ethical_challenge": "Can care, equity, and kaitiakitanga be balanced with technological goals?",
    "ai_pitch": {
      "ethical_awareness": "Choose one ethical value relevant to your pitch.",
      "application_in_practice": "Identify a technical challenge and propose one step to align with the chosen value."
    }
  },
  {
    "title": "Pulse — Electromagnetic Wave",
    "prompt": "What rhythms guide GenAI’s decisions? Can AI attune to the pulse of living systems?",
    "context": "AI systems designed for speed may conflict with human and ecological rhythms. UNESCO supports alignment with these cycles.",
    "ethical_challenge": "How could pauses or review points support well-being?",
    "ai_pitch": {
      "ethical_awareness": "Design a rhythm that reflects human or ecological cycles.",
      "application_in_practice": "Include one trigger that would prompt a pause or review."
    }
  },
  {
    "title": "Fog — Atmosphere",
    "prompt": "What is obscured by AI’s complexity? Can clarity emerge without complete visibility?",
    "context": "AI opacity undermines trust. UNESCO promotes transparency and accessible communication.",
    "ethical_challenge": "How can impacts and risks be communicated clearly?",
    "ai_pitch": {
      "ethical_awareness": "Identify one decision or output that should be explained.",
      "application_in_practice": "Propose a way to make this explanation accessible."
    }
  },
  {
    "title": "Dust — Particles",
    "prompt": "What remnants of the past shape GenAI’s future? Can AI remember what was never recorded?",
    "context": "AI is shaped by historical data, which may contain bias or omit key perspectives. UNESCO addresses historical bias and unrecorded knowledge.",
    "ethical_challenge": "How should oral histories and community memory be incorporated or acknowledged?",
    "ai_pitch": {
      "ethical_awareness": "Identify one gap or bias in your ideas.",
      "application_in_practice": "Propose a respectful way to address or acknowledge this absence."
    }
  },
  {
    "title": "Circuit — Closed Loop",
    "prompt": "Where does responsibility begin and end in GenAI? Can ethics be designed into systems as a continuous flow?",
    "context": "Responsibility spans the full lifecycle of GenAI. UNESCO calls for accountability at all stages.",
    "ethical_challenge": "How do ethical checkpoints evolve across design, deployment, and maintenance?",
    "ai_pitch": {
      "ethical_awareness": "Define one stage where accountability is critical.",
      "application_in_practice": "Propose a way to track and respond to harm at that stage."
    }
  },
  {
    "title": "Shell — Exoskeleton",
    "prompt": "What protections does AI offer — and to whom? Can it shelter more-than-human interests?",
    "context": "Safeguards often focus on humans, but ecosystems and marginalised communities may also be at risk. UNESCO extends protection to these groups.",
    "ethical_challenge": "How might you assess impact and include safeguards?",
    "ai_pitch": {
      "ethical_awareness": "Identify one vulnerable group or system your pitch might impact.",
      "application_in_practice": "Propose a safeguard."
    }
  },
  {
    "title": "Flame — Controlled Burn",
    "prompt": "What must be transformed or released for GenAI to evolve? Can destruction be part of ethical renewal?",
    "context": "Outdated or harmful GenAI must be retired to prevent long-term damage. UNESCO supports ethical renewal and responsible evolution.",
    "ethical_challenge": "What might harmful GenAI include?",
    "ai_pitch": {
      "ethical_awareness": "Identify one feature in your pitch that is transformative.",
      "application_in_practice": "Propose a renewal process for your AI pitch."
    }
  }
];

function renderCard(el, card) {
  el.innerHTML = `
    <div class="title">${card.title}</div>
    <div class="prompt"><strong>Prompt:</strong> ${card.prompt}</div>
    <div class="context"><strong>Context:</strong> ${card.context}</div>
    <div class="ethical"><strong>Ethical Challenge:</strong> ${card.ethical_challenge}</div>
    <div class="awareness"><strong>Ethical Awareness:</strong> ${card.ai_pitch.ethical_awareness}</div>
    <div class="practice"><strong>Application in Practice:</strong> ${card.ai_pitch.application_in_practice}</div>
  `;
}
