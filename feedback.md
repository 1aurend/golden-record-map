# Feedback

## Responsiveness

- Add aspect ration hook [**done 6/5**]
- Move sidebar to top for any vh > vw [**done 6/10**]
  - Also do this at some breakpoint for small horizontal windows? [**done 6/10**]
- Scale font sizes [**done 6/10**]
- Test song detail pane animation at different screen sizes
- Top bar: golden record and title, two dropdowns
  - dropdowns stack in portrait
- do metadata as grid not flex
- debounce mapnav
- change aspect ratio cutoff
- dynamically change map viewbox to prevent ugly cropping
- golden record spinner
- increase padding of mapnav arrows
- bring back the song title in infopane as well as gradient



## Buttons

- Play button should be larger or otherwise more discoverable [**done 6/11**]
  - Option = separate record image from play Button [**done 6/11**]
- Enlarge clickable area around next/prev track buttons; it's too easy to accidentally click pause rather than next [**done 6/11**]
- Add map navigation buttons to the sidebar both so users can get back to the world map from there and also to indicate that the map arrows and the dropdown have related functions [**mitigated? 6/10**]
  - Do we need map navigation in the song detail panel at all? Is it confusing? If the globe/arrows move to the sidebar and users can also click on countries? [**see previous**]
- Test a variety of button colors on users; does consistency in color help indicate which things are buttons?
 - Or use tooltips as indicators [**done 6/11**]

## Layout

- Widen the sidebar and/or the country dropdown so that long country names don't get cut off at smaller screen sizes [**done 6/10**]
  - Could also show abbreviations of country names at smaller sizes
- Git rid of delay before detail panel animation [**done 6/5** so much better! :)]

## Sound

- Have autoplay mode where users can choose to have sound play immediately upon clicking on the map
 - Test whether people prefer this as the default

## Data

 - Reorder countries? There's a weird jump with going from Australia to USSR [**done 6/5**]
 - Rename categories in song detail for clarity [**done 6/5**]
 - Data cleaning to match revised track list [**done 6/5**]
 - Add shortName value to each country [**done 6/5** but could change them all to country codes?]

# Future

## Map

- Animate viewbox transitions
- Rotate map in each country view so country is vertical
- Responsive viewbox sizes and centers
- Function to convert colors in theme prop


## Sound

- Fade songs in and out for autoplay mode

## Native App

- Feasibility test creating a native version
