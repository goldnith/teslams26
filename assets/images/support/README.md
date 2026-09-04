# Support committee photos

Source support-committee photos are converted to lightweight WebP portraits in `../optimized/support/` before being used by the page. Use clear portrait images with a consistent vertical crop.

After copying a photo here, add the member to `supportTeamMembers` in `script.js`:

```js
media: [
  {
    name: "Student Name",
    role: "Team Member",
    image: "assets/images/optimized/support/student-name.webp"
  }
]
```

Use the same format inside `snacks` for Snacks Committee members. Aim for a maximum dimension around 720 pixels so mobile users are not forced to download oversized originals.
