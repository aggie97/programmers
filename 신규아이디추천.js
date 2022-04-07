function solution(new_id) {
  var answer = "";

  new_id = new_id
    .toLowerCase()
    .match(/[0-9a-z._-]/g)
    .join("")
    .replace(/[.]{2,}/g, ".");

  if (new_id.startsWith(".")) {
    new_id = new_id.split("");
    new_id.shift();
    new_id = new_id.join("");
  }

  if (new_id.endsWith(".")) {
    new_id = new_id.split("");
    new_id.pop();
    new_id = new_id.join("");
  }

  if (new_id.length < 1) {
    new_id = "a";
  }

  if (new_id.length > 15) {
    new_id = new_id.match(/[0-9a-z._-]{15}/g).join("");
    if (new_id.endsWith(".")) {
      new_id = new_id.split("");
      new_id.pop();
      new_id = new_id.join("");
    }
  }

  if (new_id.length < 3) {
    const lastStr = new_id[new_id.length - 1];
    new_id = new_id.padEnd(3, lastStr);
  }

  answer = new_id;

  return answer;
}

// 첫 트 ( 80.8 / 100.0 )

function solution(new_id) {
  var answer = "";

  answer = new_id
    .toLowerCase()
    .replace(/[^\w._-]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.$/g, "")
    .replace(/^$/, "a")
    .slice(0, 15)
    .replace(/\.$/, "");

  return answer.padEnd(3, answer[answer.length - 1]);
}

// 풀이 보고 다시 푼 답... ( 100 / 100 )
