# 🔮 Essence Helper

This Amazon Alexa Skill provides information about ZenithVR MMORPG

# Get the Skill

Soon

# Usage

```
"Alexa, open essence mage and tell me the effect of the perk shell"
```

# How to develop

```
ask configure
ask init --hosted-skill-id amzn1.ask.skill.db94a83e-4fe1-4dcc-87ae-afb9535d8e6e
cd lambda && npm install && cd ..
git remote add github git@github.com:Markkop/essence-mage-alexa-skill.git
```

Compiled folder "dist" have to be commited since this project is a Alexa-hosted skill (which is free) and therefore we have to build the javascript code before sending it to Amazon.

# References

- [Build Skills with the Alexa Skills Kit](https://developer.amazon.com/en-US/docs/alexa/ask-overviews/build-skills-with-the-alexa-skills-kit.html)
- [Steps to Build a Custom Skill](https://developer.amazon.com/en-US/docs/alexa/custom-skills/steps-to-build-a-custom-skill.html)
- [Create a Custom Skill from a Quick Start Template](https://developer.amazon.com/en-US/docs/alexa/custom-skills/create-custom-skill-from-quick-start-template.html)
- [Get Started with the Alexa Skills Toolkit for Visual Studio Code](https://developer.amazon.com/en-US/docs/alexa/ask-toolkit/get-started-with-the-ask-toolkit-for-visual-studio-code.html)
