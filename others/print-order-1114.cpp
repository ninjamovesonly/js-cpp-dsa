#include <functional>
#include <iostream>
#include <thread>
#include <mutex>
using namespace std;

std::mutex m;
int amount = 0;

void test() {
    ++amount;
}

class Foo {
public:
    Foo() {
        
    }

    void first(void printFirst) {
        // printFirst() outputs "first". Do not change or remove this line.
        printFirst();
    }

    void second(function<void()> printSecond) {
        
        // printSecond() outputs "second". Do not change or remove this line.
        printSecond();
    }

    void third(function<void()> printThird) {
        
        // printThird() outputs "third". Do not change or remove this line.
        printThird();
    }
};


int main()
{
    test();
    Foo f;
    std::thread t([](int x){
        while(x-- > 0) {
            cout << x << endl;
        }
    }, 10);

    std::thread s([](int x){
        while(x-- > 0) {
            cout << x << endl;
        }
    }, 15);

    s.join();
    t.join();
    return 0;
}