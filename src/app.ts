import { App } from "@slack/bolt";

const app = new App({
  token: process.env.SLACK_AUTH_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

app.command("/test", async ({ ack, respond }) => {
  await ack();

  const blocks = [
    {
      type: "section",
      text: {
        type: "plain_text",
        text: "This is a plain text section block.",
        emoji: true,
      },
    },
    {
      type: "actions",
      elements: [
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Click Me",
            emoji: true,
          },
          value: "click_me_123",
          action_id: "button_click",
        },
      ],
    },
  ];

  await respond({
    response_type: "ephemeral",
    blocks,
  });
});

app.action("button_click", async ({ ack, respond }) => {
  await ack();
  await respond({
    response_type: "ephemeral",
    text: "hoge",
  });
});

(async () => {
  // Start your app
  await app.start(Number(process.env.PORT) || 3000);

  console.log("⚡️ Bolt app is running!");
})();
