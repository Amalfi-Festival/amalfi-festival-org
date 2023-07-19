Go to the wiki for this website's repository, which contains instructions on how to manage and update the website:

http://github.com/Amalfi-Festival/amalfi-festival-org/wiki/




The website knows people as either **faculty** or **staff**. Faculty members can be staff.

# Quick Guide

|Item|Location|
|-|-|
|Faculty member|```_faculty/```|
|Staff member|```_data/staff.yaml```|
|Headshots of people|```assets/people/```|
|Headshots of faculty with visual portfolios|```assets/people/[faculty-slug]/```|
|Images for visual portfolios|```assets/people/[faculty-slug]/```]

# Help me!

## Where do I add people to the festival?

This is a two-step process:

1. Add the person as a new member of the [faculty] or [staff].
2. Link that person to a [festival program] or the [staff page].

## How do I add a new member of the faculty?

1. First, *determine the* **faculty slug**, which is how they are referenced elsewhere on the site. To do this:

    |Rule|Example|
    |-|-|
    |Start with the full person's name, using proper capitalization.|```Jacqueline du Pré```|
    |Remove accents.| → ```Jacqueline du Pre```|
    |Replace all spaces with hyphens.| → ```Jacqueline-du-Pre``` |

1. Either *make a copy* of ```_faculty/_template.md``` or another faculty's file in a similar program. For example, if the new faculty is in the piano program, copy an existing piano faculty's file.

1. *Rename the file* with the faculty slug. Make sure it ends with the ```.md``` extension.

    > ```_faculty/Jacqueline-du-Pre.md```

1. *Edit and replace all of the relevant fields.* For more information look at ```_faculty/template.md```. Some fields reference images, discussed below.
1. If the faculty has a visual portfolio, *create a new folder* inside ```assets/people/``` named with the faculty slug.

    > ```assets/people/Jacqueline-du-Pre/```

1. *Move the faculty's headshot image file to the proper directory.* Make sure the image is properly sized.[LINK]

    * If the faculty has no visual portfolio, put it in ```assets/people/```.

        > ```assets/people/jackie.jpeg```
    * If the faculty has a visual portfolio, put it in the directory you created in the previous step.

        > ```assets/people/Jacqueline-du-Pre/jackie.jpeg```

1. Reference the filename in the front matter under ```headshot-filename```.

    > ```
    > ---
    > headshot-filename: jackie.jpeg
    > ---
    > ```

1. If the faculty has a visual portfolio, include those files in their directory.

    > ```
    > assets/people/Jacqueline-du-Pre/41 large.jpg
    > assets/people/Jacqueline-du-Pre/DSC09713.jpg
    > ```

    * Reference the filenames in the front matter under ```portfolio``` in order.

        > ```
        > ---
        > portfolio:
        >     - 41 large.jpg
        >     - DSC09713.jpg
        >     ...
        > ---
        > ```

## How do I add a new person to the staff?

Add a new entry, in order, in ```_data/staff.yaml```.

## How do I link a faculty to a festival program?

Add the faculty to a session in the program by using their faculty slug. List the faculty in order.

> ```
> ---
> sessions:
>     -   session-name: ...
>         faculty:
>             -   Person-1
>             -   Jacqueline-du-Pre
>             -   Person-2
>         associate-faculty:
>             -   Person-3
>             -   Person-4
> ---
> ```

More details are in ```_faculty/_template.md```.

## How do I link a faculty to the staff page?

Details are in ```_data/staff.yaml```.