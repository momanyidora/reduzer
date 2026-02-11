
interface PriorityItem<T> {
    data: T;
    priority: number;
    timestamp: Date;
}


class PriorityQueue<T> {
    private items: PriorityItem<T>[] = [];

    enqueue(data: T, priority: number): void {
        const newItem: PriorityItem<T> = {
            data,
            priority,
            timestamp: new Date()
        };

        // Find the correct insertion point
        const index = this.items.findIndex(
            item => item.priority < priority ||
                (item.priority === priority && item.timestamp > newItem.timestamp)
        );

        if (index === -1) {
            // If no suitable position found, add to the end
            this.items.push(newItem);
        } else {
            // Insert at the found index
            this.items.splice(index, 0, newItem);
        }
    }

    dequeue(): T | undefined {
        // Remove and return the first item (highest priority)
        return this.items.shift()?.data;
    }

    peek(): T | undefined {
        // View the first item without removing
        return this.items[0]?.data;
    }

    size(): number {
        return this.items.length;
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

const taskQueue = new PriorityQueue<string>();

taskQueue.enqueue("Fix critical bug", 3)
taskQueue.enqueue("Regular feature work", 1)
taskQueue.enqueue("Urgent Security patch", 3)

console.log(taskQueue.size())
console.log(taskQueue.isEmpty())
console.log(taskQueue.peek())
console.log(taskQueue.dequeue())
