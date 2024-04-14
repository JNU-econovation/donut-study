import core from "@actions/core";
import { IncomingWebhook } from "@slack/webhook";
import github from "@actions/github";

const USERS = [
  { name: "김동완", slackID: "U06MGJUV5T6", githubID: 77495584 },
  { name: "박건규", slackID: "U06MXJEGBQ8", githubID: 67491015 },
  { name: "강하은", slackID: "U06M2P73SQ6", githubID: 145974230 },
  { name: "김민준", slackID: "U06NWKZ9D8B", githubID: 129190157 },
  { name: "김기표", slackID: "U06NSRR169Y", githubID: 44811887 },
  { name: "김서영", slackID: "U06NWN9QGE8", githubID: 48192106 },
  { name: "김양하", slackID: "U06NL19ENBG", githubID: 48500209 },
  { name: "박재현", slackID: "U06NC98ND71", githubID: 5674167 },
  { name: "이윤성", slackID: "U06MZ147HBR", githubID: 56749516 },
  { name: "이규민", slackID: "U06MJJ8463Y", githubID: 102893954 },
  { name: "임채승", slackID: "U06NC9JEU2K", githubID: 45393030 },
  { name: "주동혁", slackID: "U06NDMR0EA3", githubID: 65863017 },
  { name: "최규민", slackID: "U06M9TMN89G", githubID: 127067021 },
];

try {
  const url = core.getInput("slack_url");
  console.log(url);
  const webhook = new IncomingWebhook(url);
  const send = () => {
    webhook.send(
      {
        text: "PR이 도착했습니다.🫡",
        blocks: [
          {
            type: "header",
            text: {
              type: "plain_text",
              text: "PR이 도착했습니다.🫡",
              emoji: true,
            },
          },
          {
            type: "header",
            text: {
              type: "plain_text",
              text: `${github.context.payload.pull_request.title}`,
            },
          },
          {
            type: "section",
            fields: [
              {
                type: "mrkdwn",
                text: `<@${USERS.find(
                  (user) => user.githubID === github.context.payload.sender.id
                )?.slackID
                  }>님이 PR을 보냈습니다!`,
              },
            ],
          },
          {
            type: "section",
            fields: [
              {
                type: "mrkdwn",
                text: `${github.context.payload.pull_request.requested_reviewers
                  .map((reviewer) => {
                    const slackID = USERS.find(
                      (user) => user.githubID === reviewer.id
                    )?.slackID;
                    return slackID ? `<@${slackID}>` : undefined;
                  })
                  .filter(Boolean)
                  .join(" ")}님 리뷰를 부탁해요!`,
              },
            ],
          },
          {
            type: "actions",
            elements: [
              {
                type: "button",
                url: `${github.context.payload.pull_request.html_url}`,
                text: {
                  type: "plain_text",
                  text: "PR 확인하기",
                },
              },
            ],
          },
        ],
      },
      function (err, response) {
        console.log(response);
      }
    );
  };
  if (
    github.context.payload.pull_request.requested_reviewers.length > 0 ||
    github.context.payload.pull_request.action === "review_requested"
  )
    send();
} catch (error) {
  core.setFailed(error.message);
}
