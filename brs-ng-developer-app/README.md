# Red Sox Developer Project

Thanks for your interest in working with the Red Sox Baseball Systems team!

The attached project is designed for us to get a sense of your development experience, see how you approach extending features and building new ones, and provide a basis for further technical discussion.

## Getting started

NOTE: Before you launch the Angular dev server, consult the README included in brs-developer-app-backend for instructions on starting the project backend.

Please ensure you have npm and the Angular CLI installed.
[NPM](https://www.npmjs.com/)
[Angular CLI](https://angular.io/cli)

Once these are installed, run `npm install` and wait for it to complete. Then use `ng serve` to start the dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Application structure

```
├───app
│   ├───models
│   ├───player-list
│   │   └───player-list-filters
│   │       ├───org-filter
│   │       └───search-filter
│   └───services
├───assets
│   ├───data
│   └───styles
```

- models: Contains the TypeScript models for the different data objects used in the app.
- player-list: Base component displayed in the app.
- player-list-filters: Child of the player list - contains all filters applied against list
- services: Angular-injected services for retrieving data

#### Step 1: Add 2 new filters to the player list.

- There are 2 existing filters: name and organization.
- Feel free to filter on whatever properties you'd like.
- For one of the filters you add, please use a dropdown or text input to match one of the existing filters.
- For the other, please use a new type of control.

#### Step 2: Allow the user to select an individual player from the list to display detailed information for that player.

- In doing so, please use information from:
  1. The individual player record.
  2. Game logs from the MLB Stats API.
  3. Pitch data when available (e.g. Whitlock).
- In `app\services\` you will find basic methods for retreiving these types of information - feel free to adjust these as desired.
- Which exact properties / metrics you include, and the manner in which you open, layout, and render the information is up to you.
- It is not necessary to display every available property.

#### Notes

- You may add new files, modify existing files, or re-arrange the project structure in both the backend and frontend projects if desired.
- All the data you need for the project is available from the existing service methods.
- As you build the features above, please consider responsive design and user experience.
- Angular Material is already installed in the project, but feel free to use whatever component libraries or npm packages you would like.
- If you'd like to modify existing components / features, change the look and feel, or add other features, please go ahead, but this is not required, and should not be necessary to complete the steps outlined above.
- If you run into any issues or have any questions, feel free to send us an email.

#### Wrapping up

Once you've finished your work, please:

1. Delete the `node_modules` and `.angular` folders from the projects.
2. Remove your Snowflake credentials from the backend project.
3. Zip the project folders.
4. Copy the zip files to the Dropbox or Google Drive location that was specified in the email you received.

Thank you for your time!
