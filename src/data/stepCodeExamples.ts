export const stepCodeExamples = [
  `{
  selector: "#start-demo-btn",
  content: "Welcome to trail-js! This button started the walkthrough you're experiencing right now.",
  placement: "bottom",
  showBackdrop: true,
}`,

  `{
  selector: "#name-input",
  content: "This is a form input. Try typing your name before proceeding to see validation in action!",
  placement: "top",
  canGoNext: {
    validate: () => {
      const nameInput = document.getElementById("name-input") as HTMLInputElement;
      return !!nameInput?.value.trim();
    },
    errorString: "Please enter your name to continue!",
  },
}`,

  `{
  selector: "#email-input",
  content: "Now enter a valid email address. The walkthrough validates email format before allowing you to proceed.",
  placement: "top",
  canGoNext: {
    validate: () => {
      const emailInput = document.getElementById("email-input") as HTMLInputElement;
      const email = emailInput?.value || "";
      return /\\S+@\\S+\\.\\S+/.test(email);
    },
    errorString: "Please enter a valid email address!",
  },
}`,

  `{
  selector: "#submit-button",
  content: "Great! This submit button demonstrates how trail-js can guide users through forms and complex workflows.",
  placement: "left",
  beforeNext: async () => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert("Form submitted successfully! (This was just a demo)");
  },
}`,

  `{
  selector: "#features-section",
  content: "Here are all the powerful features that make trail-js perfect for user onboarding and feature discovery.",
  placement: "top",
  showBackdrop: true,
}`,

  `{
  selector: "#usage-examples",
  content: "Check out these code examples to see how easy it is to implement trail-js in your React app!",
  placement: "top",
  showBackdrop: true,
}`
];
