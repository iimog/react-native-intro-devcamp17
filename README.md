# Introduction to React Native
You can see the very minimalistic slides in the slides folder.
Just open the index.html in your webbrowser.

# Build TicTacToe app
If you want to re-build the app as demonstrated at the devcamp17 follow these steps:
1. Install react-native according to the [documentation](https://facebook.github.io/react-native/docs/getting-started.html)
2. Init a new app by executing `react-native init TicTacToe`
3. Your `index.android.js` should now look similar to [00_initial.js](prepared/00_initial.js)
4. Start an emulator and run this default app
5. Play around and modify some styles
6. Build the board by adding some views
7. If you are stuck have a look at [01_field.js](prepared/01_field.js)
8. Add state to your main class to handle the content of fields ([02_state.js](prepared/02_state.js))
9. Make it playable by calling setState on touches ([03_playable.js](prepared/03_playable.js))
10. Add logic to detect if the game is over and who is the winner ([04_winner.js](prepared/04_winner.js))
11. Finalize the app to make it a little more visually pleasing ([05_final.js](prepared/05_final.js))
