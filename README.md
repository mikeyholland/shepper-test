# Shepper Frontend Technical Test

## Background

A good portion of Shepper's existing technology revolves around data collection. We work with forms a lot, and a lot of the time we'd like these forms to be dynamic.

Forms are often a sticking point when it comes to front-end engineers, and we'd like our ideal engineer to be comfortable with forms and their usage.

## Challenge

We would like you to build a React application that allows the creation & subsequent submission of dynamic forms.

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

## Resources

- [Example Form Spec](example-form-spec.json)
- [Example Submission Payload](example-form-payload.json) for a form with the above spec

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

- `react-router-dom` - For routing. This also has the peer dependencies:
  - `localforage` - local storage, feel free to use
  - `match-sorter`
  - `sort-by`
- `formik` - forms
- `tailwindcss` & co - tailwind
