# 🎙️ Essence Helper

This Amazon Alexa Skill provides information about ZenithVR MMORPG

**Note:**  
Since I'm maintaining this skill for both Alexa and Google Assistant platforms, I'm now using a framework to avoid duplicate code and logic.    
For this reason, this repository has been discontinued in favor of: https://github.com/Markkop/essence-helper-jovo


# Get the Skill

https://www.amazon.com/dp/B09T6XJ3NT

# Usage

```
"Alexa, open essence helper"
"Alexa, open essence helper and tell me the effect of the perk shell"
"Alexa, open Essence Helper and provide me the effect of blood thief"
"Alexa, open Essence Helper and get the effect of the perk brain freeze"
```

# How to develop

```
ask configure
ask init --hosted-skill-id amzn1.ask.skill.db94a83e-4fe1-4dcc-87ae-afb9535d8e6e
cd lambda && npm install && cd ..
git remote add github git@github.com:Markkop/essence-helper-alexa-skill.git
```

Compiled folder "dist" have to be commited since this project is a Alexa-hosted skill (which is free) and therefore we have to build the javascript code before sending it to Amazon.

# References

- [Build Skills with the Alexa Skills Kit](https://developer.amazon.com/en-US/docs/alexa/ask-overviews/build-skills-with-the-alexa-skills-kit.html)
- [Steps to Build a Custom Skill](https://developer.amazon.com/en-US/docs/alexa/custom-skills/steps-to-build-a-custom-skill.html)
- [Create a Custom Skill from a Quick Start Template](https://developer.amazon.com/en-US/docs/alexa/custom-skills/create-custom-skill-from-quick-start-template.html)
- [Get Started with the Alexa Skills Toolkit for Visual Studio Code](https://developer.amazon.com/en-US/docs/alexa/ask-toolkit/get-started-with-the-ask-toolkit-for-visual-studio-code.html)
