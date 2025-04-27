# Testing

> [!NOTE]
> Return back to the [README.md](README.md) file.

## Code Validation

### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

| Directory | File | URL | Screenshot | Notes |
| --- | --- | --- | --- | --- |
|  | [404.html](https://github.com/runwiththerhythm/growing-guide/blob/main/404.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https://runwiththerhythm.github.io/growing-guide/404.html) | ![screenshot](documentation/testing/html-validator-404-pass.png) |  |
|  | [index.html](https://github.com/runwiththerhythm/growing-guide/blob/main/index.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https://runwiththerhythm.github.io/growing-guide/index.html) | ![screenshot](documentation/testing/html-validator-index-pass.png) | ![screenshot](documentation/testing/html-validator-index-error.png) Fixed error |
|  | [resources.html](https://github.com/runwiththerhythm/growing-guide/blob/main/resources.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https://runwiththerhythm.github.io/growing-guide/resources.html) | ![screenshot](documentation/testing/html-validator-resources-pass.png) |  |
|  | [about.html](https://github.com/runwiththerhythm/growing-guide/blob/main/about.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https://runwiththerhythm.github.io/growing-guide/about.html) | ![screenshot](documentation/testing/html-validator-about-pass.png) |  |
|  | [contact.html](https://github.com/runwiththerhythm/growing-guide/blob/main/contact.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https://runwiththerhythm.github.io/growing-guide/contact.html) | ![screenshot](documentation/testing/html-validation-contact-pass.png) |  |

### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate my CSS file.

| Directory | File | URL | Screenshot | Notes |
| --- | --- | --- | --- | --- |
| assets | [style.css](https://github.com/runwiththerhythm/growing-guide/blob/main/assets/css/style.css) | [CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https://runwiththerhythm.github.io/growing-guide) | ![screenshot](documentation/testing/css-validator-pass.png) |


### JavaScript


I have used the recommended [JShint Validator](https://jshint.com) to validate all of my JS files.

| Directory | File | URL | Screenshot | Notes |
| --- | --- | --- | --- | --- |
| assets | [data.js](https://github.com/runwiththerhythm/growing-guide/blob/main/assets/js/data.js) | N/A | ![screenshot](documentation/validation/js-assets-data.png) | Notes (if applicable) |
| assets | [data.test.js](https://github.com/runwiththerhythm/growing-guide/blob/main/assets/js/data.test.js) | N/A | ![screenshot](documentation/validation/js-assets-data.test.png) | Notes (if applicable) |
| assets | [script.js](https://github.com/runwiththerhythm/growing-guide/blob/main/assets/js/script.js) | N/A | ![screenshot](documentation/validation/js-assets-script.png) | Notes (if applicable) |
| assets | [script.test.js](https://github.com/runwiththerhythm/growing-guide/blob/main/assets/js/script.test.js) | N/A | ![screenshot](documentation/validation/js-assets-script.test.png) | Notes (if applicable) |
|  | [jest.config.js](https://github.com/runwiththerhythm/growing-guide/blob/main/jest.config.js) | N/A | ![screenshot](documentation/validation/js--jest.config.png) | Notes (if applicable) |
|  | [jest.setup.js](https://github.com/runwiththerhythm/growing-guide/blob/main/jest.setup.js) | N/A | ![screenshot](documentation/validation/js--jest.setup.png) | Notes (if applicable) |


## Responsiveness

I've tested my deployed project to check for responsiveness issues.

| Page | Mobile | Tablet | Desktop | Notes |
| --- | --- | --- | --- | --- |
| Home | ![screenshot](documentation/testing/mobile-home.png) | ![screenshot](documentation/testing/tablet-home.png) | ![screenshot](documentation/testing/chrome-index.png) | Works as expected |
| Plant Modal | ![screenshot](documentation/testing/mobile-modal1.png) | ![screenshot](documentation/testing/tablet-modal.png) | ![screenshot](documentation/testing/firefox-modal.png) | Works as expected |
| Month View | ![screenshot](documentation/testing/mobile-month.png) | ![screenshot](documentation/testing/tablet-month.png) | ![screenshot](documentation/testing/chrome-month.png) | Works as expected |
| Resources | ![screenshot](documentation/testing/mobile-404.png) | ![screenshot](documentation/testing/tablet-404.png) | ![screenshot](documentation/testing/firefox-404.png) | Works as expected |
| About | ![screenshot](documentation/testing/mobile-about.png) | ![screenshot](documentation/testing/tablet-about.png) | ![screenshot](documentation/testing/chrome-about.png) | Works as expected |
| Contact | ![screenshot](documentation/testing/mobile-contact.png) | ![screenshot](documentation/testing/tablet-contact.png) | ![screenshot](documentation/testing/chrome-contact.png) | Works as expected |
| 404 | ![screenshot](documentation/testing/mobile-404.png) | ![screenshot](documentation/testing/tablet-404.png) | ![screenshot](documentation/testing/firefox-404.png) | Works as expected |

## Browser Compatibility

I've tested my deployed project on multiple browsers to check for compatibility issues.

- [Chrome](https://www.google.com/chrome)
- [Firefox (Developer Edition)](https://www.mozilla.org/firefox/developer)
- [Brave](https://brave.com/download)

| Page | Chrome | Firefox | Brave | Notes |
| --- | --- | --- | --- | --- |
| Home | ![screenshot](documentation/testing/chrome-index.png) | ![screenshot](documentation/testing/firefox-index.png) | ![screenshot](documentation/testing/brave-home.png) | Works as expected |
| About | ![screenshot](documentation/testing/chrome-about.png) | ![screenshot](documentation/testing/firefox-about.png) | ![screenshot](documentation/testing/brave-about.png) | Works as expected |
| Contact| ![screenshot](documentation/testing/chrome-contact.png) | ![screenshot](documentation/testing/firefox-contact.png) | ![screenshot](documentation/testing/brave-contact.png) | Works as expected |
| Modal | ![screenshot](documentation/testing/chrome-modal.png) | ![screenshot](documentation/testing/firefox-modal.png) | ![screenshot](documentation/testing/brave-modal.png) | Works as expected |
| Month View | ![screenshot](documentation/testing/chrome-month.png) | ![screenshot](documentation/testing/firefox-month.png) | ![screenshot](documentation/testing/brave-month.png) | Works as expected |
| 404 | ![screenshot](documentation/testing/chrome-404.png) | ![screenshot](documentation/testing/firefox-404.png) | ![screenshot](documentation/testing/brave-404.png) | Works as expected |

## Lighthouse Audit

I've tested my deployed project using the Lighthouse Audit tool to check for any issues. 

| Mobile | Desktop |
| --- | --- |
| ![screenshot](documentation/testing/lighthouse-mobile.png) | ![screenshot](documentation/testing/lighthouse-desktop.png) |


## Defensive Programming

Defensive programming was manually tested with the below user acceptance testing:

| Page/Feature | Expectation | Test | Result | Screenshot |
| --- | --- | --- | --- | --- |
| Calculator UI | Feature is expected to allow the user to input two numbers and select an operator (`+`, `-`, `*`, `/`). | Entered two numbers and selected each operator to perform calculations. | Calculations for all operators worked as expected. | ![screenshot](documentation/defensive/input-output.png) |
| | Feature is expected to show an error message if inputs are empty (`NaN`). | Tried submitting calculations with empty input fields. | Error message displayed as expected. | ![screenshot](documentation/defensive/empty-inputs.png) |
| | Feature is expected to display buttons that are clear, large, and easy to select on all devices. | Verified button sizes and usability across multiple devices (mobile, tablet, desktop). | Buttons were accessible and easy to use on all tested devices. | ![screenshot](documentation/defensive/responsive.png) |
| | Feature is expected to use high-contrast colors and accessible fonts. | Checked contrast ratios using accessibility tools (e.g., Lighthouse, Wave). | Colors and fonts met accessibility standards. | ![screenshot](documentation/defensive/accessibility.png) |
| | Feature is expected to have clear labels and instructions for user guidance. | Reviewed labels and instructions for clarity and ease of use. | Labels and instructions were clear and intuitive. | ![screenshot](documentation/defensive/labels-instructions.png) |
| Instant Calculation | Feature is expected to calculate and display results instantly after selecting an operator. | Selected operators after entering two numbers. | Results were displayed instantly. | ![screenshot](documentation/defensive/calc-speed.png) |
| Error Handling | Feature is expected to display correct results even if an equation was input incorrectly. | Entered various incorrect equations and verified the results. | Correct results were displayed for all tested cases. | ![screenshot](documentation/defensive/error-handling.png) |
| Score Tracker | Feature is expected to track the number of correct and incorrect equations. | Performed multiple calculations (correct and incorrect) and checked the score tracker. | Score tracker updated correctly for all tested scenarios. | ![screenshot](documentation/defensive/score-tracker.png) |
| 404 Error Page | Feature is expected to display a 404 error page for non-existent pages. | Navigated to an invalid URL (e.g., `/test`) to test error handling. | A custom 404 error page was displayed as expected. | ![screenshot](documentation/defensive/404.png) |

## User Story Testing

| Target | Expectation | Outcome | Screenshot |
| --- | --- | --- | --- |
| As a first-time visitor | I want to immediately understand what the app does from the homepage | so that I know it’s useful for planning my garden. | ![screenshot](documentation/testing/brave-home.png) |
| As a first-time visitor | I want to quickly access beginner-friendly resources | so that I can learn how to start growing my own food.| ![screenshot](documentation/testing/firefox-modal.png) |
| As a first-time visitor | I want to browse the plant list without creating an account  | so that I can explore without commitment. | ![screenshot](documentation/plant-grid-view.png) |
| As a first-time visitor | I want to see plant info in a modal with clear, attractive images and symbols  | so that I can quickly understand their needs. | ![screenshot](documentation/testing/chrome-modal.png) |
| As a first-time visitor | I would like to see a 404 error page if I visit a dead link | so I am not confused or lost. | ![screenshot](documentation/testing/chrome-404.png) |
| As a returning visitor |  I want to jump straight into the calendar view | so that I can see what I need to do this month in my garden.| ![screenshot](documentation/testing/brave-month.png) |
| As a returning visitor | I want a Resources page with helpful links to articles, seeds and equipment retailers, and book recommendations  | so I can keep learning about growing. | ![screenshot](documentation/resources.png) |
| As a returning visitor | I want to be able to search for specific plants  | so I can find information I need efficiently. | ![screenshot](documentation/search-functionality.png) |
| As a returning visitor | I want to be able to contact the app creator  | so I can give them feedback. | ![screenshot](documentation/contact-form.png) |
| As a mobile user |  I want a fully responsive app with buttons and text large and readable | so I can use the app outside in the garden. | ![screenshot](documentation/testing/mobile-home.png) |

## Automated Testing

I have conducted a series of automated tests on my application.

> [!NOTE]
> I fully acknowledge and understand that, in a real-world scenario, an extensive set of additional tests would be more comprehensive.

### JavaScript (Jest Testing)

I have used the [Jest](https://jestjs.io) JavaScript testing framework to test the application functionality. 

Below are the results from the tests that I've written for this application:

 ![screenshot](documentation/testing/jest-testing-passed-clip.png) |

Tests can be viewed here;
- [data.test.js](https://github.com/runwiththerhythm/growing-guide/blob/main/assets/js/data.test.js)
- [script.test.js](https://github.com/runwiththerhythm/growing-guide/blob/main/assets/js/script.test.js)

## Bugs

### Fixed Bugs

[![GitHub issue custom search](https://img.shields.io/github/issues-search?query=repo%3Arunwiththerhythm%2Fgrowing-guide%20label%3Abug&label=bugs)](https://www.github.com/runwiththerhythm/growing-guide/issues?q=is%3Aissue+is%3Aclosed+label%3Abug)

I've used [GitHub Issues](https://www.github.com/runwiththerhythm/growing-guide/issues) to track and manage bugs and issues during the development stages of my project.

All previously closed/fixed bugs can be tracked [here](https://www.github.com/runwiththerhythm/growing-guide/issues?q=is%3Aissue+is%3Aclosed+label%3Abug).

![screenshot](documentation/gh-issues.png)

### Unfixed Bugs

[![GitHub issues](https://img.shields.io/github/issues/runwiththerhythm/growing-guide)](https://www.github.com/runwiththerhythm/growing-guide/issues)

Any remaining open issues can be tracked [here](https://www.github.com/runwiththerhythm/growing-guide/issues).

### Known Issues

| Issue | Screenshot |
| --- | --- |
| On devices smaller than 375px, the page starts to have horizontal `overflow-x` scrolling. | ![screenshot](documentation/issues/overflow.png) |
| When validating HTML with a semantic `<section>` element, the validator warns about lacking a header `h2-h6`. This is acceptable. | ![screenshot](documentation/issues/section-header.png) |

> [!IMPORTANT]
> There are no remaining bugs that I am aware of, though, even after thorough testing, I cannot rule out the possibility.

