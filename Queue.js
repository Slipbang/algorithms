class Queue {
    constructor() {
        this.items = {}
        this.frontIndex = 0
        this.backIndex = 0
    }
    enqueue(item) {
        this.items[this.backIndex] = item
        this.backIndex++
        return item
    }
    dequeue() {
        const item = this.items[this.frontIndex]
        delete this.items[this.frontIndex]
        this.frontIndex++
        return item
    }
    size() {
        return Object.keys(this.items).length;
    }
    peek() {
        return this.items[this.frontIndex]
    }
    get printQueue() {
        return this.items;
    }
}

class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(item, priority) {
        this.queue.push({ item, priority });
        this.queue.sort((a, b) => a.priority - b.priority);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.queue.shift().item;
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.queue[0].item;
    }

    print() {
        let result = [];
        for (let i = 0; i < this.queue.length; i++) {
            result.push(this.queue[i].item + " - " + this.queue[i].priority);
        }
        return result.join(", ");
    }
}

// Пример использования:

const pq = new PriorityQueue();
pq.enqueue("Task 1", 2);
pq.enqueue("Task 2", 1);
pq.enqueue("Task 3", 3);

console.log("Queue: ", pq.print());

console.log("Dequeue: ", pq.dequeue());
console.log("Queue after dequeue: ", pq.print());

console.log("Peek: ", pq.peek());