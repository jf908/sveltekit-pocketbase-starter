$app.rootCmd?.addCommand(
  new Command({
    use: 'hello',
    run() {
      console.log('Hello world');
    },
  }),
);
