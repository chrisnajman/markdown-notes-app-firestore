# Markdown Notes App (Firestore)

This is the result of the Scrimba Tutorial [Notes App (registration required)](https://v2.scrimba.com/learn-react-c0e), including the setting up of _Firebase / Firestore_.

Much of the code was pre-written. The task was to add functionality to an existing codebase.

## Functionality to Add

1. Sync notes with _Firestore_.
2. Create note titles from a summary of the note.
3. Move modified notes to the top of the list.
4. Delete notes.

---

### Firebase Config

You will need add your own config code to `firebase.js`.

> [!WARNING]
> If you do set up a _firestore_ database, then publish the app as a GitHub Page, anyone will be able to save notes to the database.
> If you decide to do this, make sure you rename the folder, `.XXXgithub` to `.github`.

### Alternative Version using `localstorage` to Save Notes

- [Markdown Notes App (Local Storage): Git Repository](https://github.com/chrisnajman/markdown-notes-app-localstorage)
- [Markdown Notes App (Local Storage): Git Page](https://chrisnajman.github.io/markdown-notes-app-localstorage/)

## React Version

> [!IMPORTANT]
> `react-mde` (the markdown editor) has not been updated for _React V.18_.
> Therefore, _React V.18_ has been used for this project.

---

## Accessibility

In the markdown editor, you can't tab through the toolbar buttons (apart from 'Write' and 'Preview').
This is because `tabindex="-1"` is placed on these buttons, removing them from the tab order.

_ChatGPT_ supplied a solution, which was to give ALL the buttons (including 'Write' and 'Preview') a `tabindex` of zero:

```jsx

function Editor({ currentNote, updateNote }) {

    ...

    useEffect(() => {
    // Function to update tabindex of toolbar buttons
    const updateTabindex = () => {
        const toolbarButtons = document.querySelectorAll(".mde-header button")
        toolbarButtons.forEach((button) => {
        button.setAttribute("tabindex", "0")
        })
    }

    // Call the function initially after the component mounts
    updateTabindex()

    // Optional: observe changes to ensure tabindex stays updated
    const observer = new MutationObserver(updateTabindex)
    const toolbar = document.querySelector(".mde-header")

    if (toolbar) {
        observer.observe(toolbar, { childList: true, subtree: true })
    }

    // Cleanup the observer on component unmount
    return () => {
        observer.disconnect()
    }
    }, []) // Empty dependency array to run only once on mount

    ...
}
```

On reflection, however, I have decided **not** to include the code. This is because:

- In order to format the text, you first have to manually select it.
- Then you have to click a formatting button.
- But, if you reverse tab from the selected text to a toolbar button, the text selection disappears, so there is nothing for the button to format.

**Conclusion**: the toolbar formatting buttons are inherently inaccessible to keyboard navigation. (But you can still write and preview markdown code.)

---

## Testing

Tested on Windows 10 with:

- Chrome
- Firefox
- Microsoft Edge

Page tested in both browser and device views.
