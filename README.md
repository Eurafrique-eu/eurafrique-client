# EURAFRIQUE.EU

This is the code for the official website for the association Eurafrique.eu. <br>
Built using React, react-router, useContext, SCSS and is available in 4 different languages <br><br>

Visit the website at https://dev.eurafrique.eu/ (work in progress)

<img src="./public/logo-tab.png"/>

# To run the app locally:

Clone the repository in your terminal, open the project directory, then:

### `code .`

Then you can run:

### `npm start`

which runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

For complete documentation, visit https://react.dev/

# Hosting

- The app is hosted on a cpanel at o2switch.
- To access the files, go to the cpanel Dashboard, Files (Fichiers) - File Manager (Gestionnaire de Fichiers) - Repositories - eurafrique-client
- This github repository is already linked to the cpanel and anything pushed to the main branch on this repo can then be pushed to the cpanel as well. You can trigger the update directly from the cpanel by accessing: On the cpanel dashboard - Files (Fichiers) - Git Version Control - eurafrique-client - Gérer - Pull or deploy - Update from remote - Deploy Head Commit

# Deployment

Attention: When making changes locally, before pushing, you must run again and each time

### `npm run build`

Another important point: running this will automatically remove the htaccess file contained in the build folder, but YOU MUST restore it in the build folder before pushing to github or deployment won't work.

## Troubleshooting the deployment

- Getting an error 403 after deployment? Check the permissions of every folder in the file manager. Folder must be on 755, files on 644. Check all of them, and start with the parents folders, they usually cause the issue.
