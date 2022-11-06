function TaskRunner(concurrency) {
  this.max = concurrency;
  this.queue = new Array(this.max);
  this.queue.fill(undefined, 0, this.max);
  this.waitQueue = new Array();
}

TaskRunner.prototype.push = function push(task) {
  const idx = this.queue.indexOf(undefined);
  if (idx !== -1) {
    this.queue[idx] = taskRunner(task(), idx);
  } else {
    this.waitQueue.push(task);
  }
};

function execute(idx) {
  if (r.waitQueue.length === 0) return;

  const task = r.waitQueue.pop();
  r.queue[idx] = taskRunner(task(), idx);
}

async function taskRunner(task, idx) {
  await task;
  r.queue[idx] = undefined;

  const id = r.queue.indexOf(undefined);

  if (id !== -1) {
    execute(id);
  }
}

function done(level, result) {
  console.log(`${level} ${result}`);
}

function exampleSimpleTask(level, done) {
  return () => {
    const p = new Promise((res) =>
      setTimeout(() => res(done(level, "completed")), Math.random() * 1000)
    );
    return p;
  };
}

const r = new TaskRunner(3);

r.push(exampleSimpleTask("task 1", done));
r.push(exampleSimpleTask("task 2", done));
r.push(exampleSimpleTask("task 3", done));
r.push(exampleSimpleTask("task 4", done));
r.push(exampleSimpleTask("task 5", done));
