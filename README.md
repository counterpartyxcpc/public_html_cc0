##  Customize the template
See the *index.html* file inside the **layouts** directory.

You can break this template into partials. 

## Quick start

### 1. Configure your site

From the exampleSite, copy `config.toml` to the root folder of your Hugo site and change the fields as you like. There are helpful hints in the file.

### 2. Create pages

Run:
```sh
$ hugo new page.md
```
Where `page` can be anything you like. A contact page, a bio, dates for your upcoming world tour... Anything!

### 3. Design your main menu and index page

In `config.toml`, customize the entries for `[[params.mainMenu]]` however you like. You can have as many or as few entries as you like. You can even include external links. 

This list comprises the index page and part of the navigation menu at the bottom of single content pages. Here's an example:

```
[[params.mainMenu]]
    link = "/#features"
    text = "features"

[[params.mainMenu]]
    link = "/#community"
    text = "community"
```

## Preview your site locally

Use Hugo's built-in server to see your site in action as you make changes.

```
$ hugo serve -t sam
```

Visit `localhost:1313` in your browser to see a live preview of your site.

## Posts

To create a new post, run:
```
$ hugo new posts/your-post-title.md
```