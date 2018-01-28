import NodeResque from 'node-resque';
import configs from '../configs';
import Person from '../models/person';

const jobs = {
  match: {
    perform: Person.matchAll,
  },
};

const worker = new NodeResque.Worker({
  connection: configs.redis,
  queues: ['matches', 'mailers'],
}, jobs);

const queue = new NodeResque.Queue({
  connection: configs.redis,
}, jobs);

worker.on('start', () => { console.log('worker started'); });
worker.on('end', () => { console.log('worker ended'); });
worker.on('job', (queue, job) => { console.log(`working job ${queue} ${JSON.stringify(job)}`); });
worker.on('success', (queue, job, result) => { console.log(`job success ${queue} ${JSON.stringify(job)} >> ${result}`); });
worker.on('error', (error, queue, job) => { console.log(`error ${queue} ${JSON.stringify(job)}  >> ${error}`); });

class Jobs {
  static async init() {
    await worker.connect();
    worker.start();

    await queue.connect();
  }

  static async enqueue(onQueue, name, params = null) {
    await queue.enqueue(onQueue, name, params);
  }
}

export default Jobs;
