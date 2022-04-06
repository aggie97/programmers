function solution(id_list, report, k) {
  var answer = [];

  let reportWithoutOverlap = [...new Set(report)];
  const reportUsers = [
    ...new Set(reportWithoutOverlap.map((report) => report.split(" ")[0])),
  ];
  let reported = reportWithoutOverlap.map((report) => report.split(" ")[1]);
  const reportedInfo = reported.reduce((info, user) => {
    if (info[user]) {
      info[user]++;
    } else {
      info[user] = 1;
    }
    return info;
  }, {});

  for (const user of id_list) {
    let mailCount = 0;
    if (reportUsers.includes(user)) {
      for (const report of reportWithoutOverlap) {
        let reportUser = report.split(" ")[0];
        let reportedUser = report.split(" ")[1];
        if (reportUser === user && reportedInfo[reportedUser] >= k) {
          mailCount++;
        }
      }
    }
    answer.push(mailCount);
  }
  return answer;
}

// 시간 초과로 인해 (66.7 / 100)

// 풀이 보고 다시 푼 것

function solution(id_list, report, k) {
  var answer = [];
  const reportedObj = {};
  for (const id of id_list) {
    reportedObj[id] = [];
    answer.push(0);
  }

  let reportNoOverlap = [...new Set(report)];

  for (const rep of reportNoOverlap) {
    const [reportUser, reportedUser] = rep.split(" ");
    reportedObj[reportedUser].push(reportUser);
  }

  for (const id of id_list) {
    if (reportedObj[id].length >= k) {
      for (let reportUser of reportedObj[id]) {
        answer[id_list.indexOf(reportUser)]++;
      }
    }
  }
  return answer;
}
