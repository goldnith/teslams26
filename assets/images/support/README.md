# Support committee photos

Create these folders when the student photos are available:

- `media/` for Media Team photos
- `snacks/` for Snacks Committee photos

Use clear portrait images with a consistent 4:5 crop. WebP is recommended for faster mobile loading.

After copying a photo here, add the member to `supportTeamMembers` in `script.js`:

```js
media: [
  {
    name: "Student Name",
    role: "Team Member",
    image: "assets/images/support/media/student-name.webp"
  }
]
```

Use the same format inside `snacks` for Snacks Committee members.
