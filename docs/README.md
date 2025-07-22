# iPhone Automation Resources

This repository contains utilities and templates for automating tasks on an iPhone. It relies on several third‑party apps available from the App Store. Not every app is required for all features.

## Required iPhone Apps

- **Shortcuts** *(required)* – used for running `.shortcut.json` files.
- **a-Shell** or **iSH** *(optional)* – command line apps for running shell scripts.
- **Pyto** or **Pythonista** *(optional)* – run Python scripts on device.

## Importing Shortcuts

1. Open the Shortcuts app.
2. Tap the "+" button and choose **Add Shortcut**.
3. Select **Import File** and choose any file from the `/shortcuts` folder ending in `.shortcut.json`.
4. Review the actions and tap **Add Shortcut** to finish.

## Running Shell Scripts

1. Open **a-Shell** or **iSH** on your iPhone.
2. Navigate to the `/shell` folder using `cd`.
3. Run the script with `sh scriptname.sh` or make it executable with `chmod +x` and run `./scriptname.sh`.

## Using HTML Tools

Single‑file utilities in `/html-tools` can be opened directly in Safari:

1. Browse to the file in the Files app.
2. Tap **Share** and choose **Open in Safari**.

## Editing with Codex

To update these files with Codex:

1. Clone or pull this repository on your computer.
2. Make your changes locally and commit them with a descriptive message.
3. Push to GitHub and open a pull request.
4. Codex will review the pull request and run automated checks before merging.
