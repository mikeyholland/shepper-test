# Shepper Frontend Technical Test

## Background

A good portion of Shepper's existing technology revolves around data collection. We work with forms a lot, and a lot of the time we'd like these forms to be dynamic.

Forms are often a sticking point when it comes to front-end engineers, and we'd like our ideal engineer to be comfortable with forms and their usage.

## Challenge

We would like you to build a React application that allows the creation & subsequent submission of dynamic forms.

We'd recommend you doing this via two pages - a form builder that allows you to create a form spec, and a form loader that takes a form spec, renders the form, allows you to fill in and submit to show the output (payload). You can also make an index page if you've got time, but we won't fault you if you don't.

We've set the project up already with yarn, vite, tailwind (including typography & forms) & typescript. a simple `yarn && yarn dev` should get you up and running. `main.tsx` is your entrypoint, `App.tsx` being the app root.

This is a rather involved test, so we'd recommend giving it 4-6 hours. It's fine to work on it over a couple days we won't be timing you.

### Form Builder

This page will allow the user to define a form. A form when represented as json is an array of fields. The field types to be supported in this task are:

- `text` - a standard short-form text field.
- `textarea` - a standard long-form text field.
- `checkbox` - a checkbox that outputs true/false.
- `select` - a select dropdown, accepts possible options, allows customer to select one.
- `group` - Allows depth within a form. Can hold child fields, and has a label of it's own.

All of these field types are present in the form spec, and all attributes that need to be supported by each type are included.

### Form Loader

This page allows the user to see & fill out a form as defined by a form spec. The output of the form builder should be compatible with the input to this page. A form payload will use field names as keys with the value of the field as values. Empty fields should be represented as `null`.

We'd like you to simulate the form submission using mock requests (how you mock is up to you, but we'd like a 2s loading time), using these rules:

- If there's a top-level name field (required or not) that is null, use the failed submission
- Otherwise, return use the successful submission.

## Resources

- [Example Form Spec](mock/example-form-spec.json)
- [Example Submission Payload](mock/example-form-payload.json) for a form with the above spec
- [Successful Submission](mock/example-response-success.json)
- [Failed Submission](mock/example-response-failure.json)

## Pointers

- Given the inclusion of a "group" type, we'd recommend considering what uses recursion could have in the completion of this task.
- While we're not restricting the use of additional packages within this project, we've included initial packages that should cover your bases.
- Code maintainability is key. Think about how this would be extended to support more field types, and feel free to support more if you've got time!
- We've initialised the project with tailwind, so let [tailwind](https://tailwindui.com/components) be your friend. We're not expecting professional design but we'll be looking out for UX principles and the generally nice look & feel that using tailwind ui components affords you.
- How a form spec is transferred from the Builder to the Loader is up to you. We only ask that we can see the JSON that both the Builder and Loader output. A few methods for inspiration:
  - Builder outputs the JSON into a code box that can be copy + pasted into an input box on the Loader page.
  - Builder passes the data to the Loader via routing (we'll still have to see the Builder output somehow)
  - Builder saves the form in local storage and the Loader can load it.
  - Any other method you can think of that solves the problem.

## Initial Packages

- `react-router-dom` - For routing. It's the latest version and they tend to change quite a lot between majors so we recommend you have a look at the docs before starting if you've not used v6 before. This also has the peer dependencies:
  - `localforage`
  - `match-sorter`
  - `sort-by`
- `formik` - for forms
- (dev) `tailwindcss` & co - tailwind

## Feedback

As this is a new test, feedback is always appreciated. Let us know how long it took you, and what you found good/bad about it.
