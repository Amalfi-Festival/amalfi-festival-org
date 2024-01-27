---
### Template for people

# If a particular piece of data is unavailable, remove the entire line.

# People's images are expected to be in the /assets/people/[person-slug]/ directory, as "-headshot.jpg" and "-thumbnail.jpg". For instructions on creating and resizing web-appropriate versions of their headshots, please go to https://github.com/Amalfi-Festival/amalfi-festival-org/wiki/People-%E2%80%90-Faculty-%E2%80%90-Staff#how-do-i-add-a-new-member-of-the-faculty

first-name: # English first name
last-name: # English last name
zh-name: # Chinese name, if available
prefers-en-name: # For almost everyone, please delete this line. Only include it, and set it to |true| (see Nagai's page) if the following is desired: on Chinese pages the English name will be listed first, with |zh-name| listed in parenthesis. Usually, |zh-name| is used if it exists, otherwise the English name is used.
role: # Use this if the instructors works for a non-academic institution, or roles that they have outside the festival. Instructors not in the piano programs, and staff will usually use this instead of |school|. If the individual has multiple roles, this can be an array of strings (see Anthony Blake Clark).
school: # School from which a professor teaches.
school-zh: # Chinese name of the school.
website: https:// # If the person has a personal website they'd like to include, include it here. Otherwise, remove this line.
portfolio:
    # For visual arts instructors, their works may be displayed as a gallery on their profile page. The images should be listed in order, and should be in the /assets/people/[person-slug]/ directory.
    - Filename.jpg
    - # ...
permalink: /people/:title # Include this line if they are not piano faculty.
---

Place the person's bio here.