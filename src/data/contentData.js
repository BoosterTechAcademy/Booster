// src/data/contentData.js
export const contentMap = {
  flow: {
    id: "flow",
    title: "Control Flow Statements",
    description: `
      <div class="content-container">
        <h1>Control Flow Statements in Java</h1>
        <p>This is a sample HTML content about flow.</p>
      </div>
    `
  },
  variables: {
    id: "variables",
    title: "Variables in Java",
    description: `
      <div class="content-container">
        <h1>Variables</h1>
        <p>Learn about variables in Java with examples and types.</p>
      </div>
    `
  },
  operators: {
    id: "operators",
    title: "operators in Java",
    description: `
      <div class="content-container">
  

  <img src="https://developersdome.com/wp-content/uploads/2021/09/Gold-Modern-Classic-Bordered-Blog-Banner-7.jpg" alt="Java Operators Banner" class="flow-img" />

  <p>
    Java Operators are of prime importance in Java. Without operators we wouldn’t be able to perform logical, arithmetic calculations in our programs. Thus having operators is an integral part of a programming language.
  </p>

  <p>
    Operators in Java are the symbols used for performing specific operations in Java.
  </p>

  <h2>Types of Operators in Java</h2>
  <ul class="styled-list">
    <li>Arithmetic Operators</li>
    <li>Unary Operators</li>
    <li>Assignment Operator</li>
    <li>Relational Operators</li>
    <li>Logical Operators</li>
    <li>Ternary Operator</li>
    <li>Bitwise Operators</li>
    <li>Shift Operators</li>
  </ul>

  <img src="https://javanetc.com/wp-content/uploads/2023/08/Operators-in-Java-min-1024x576.png" alt="Operators in Java Diagram" class="flow-img" />
</div>

<!-- 1 -->
 <div class="content-container">
  <h1>Java Arithmetic Operators</h1>

  <p>
    Arithmetic operators are used to perform arithmetic operations on variables and data. For example,
  </p>

  <p><code>a + b;</code></p>

  <p>
    Here, the <code>+</code> operator is used to add two variables <code>a</code> and <code>b</code>. Similarly, there are various other arithmetic operators in Java.
  </p>

  <table class="styled-table" style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <thead>
      <tr style="background-color: #e3f2fd;">
        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Operator</th>
        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Operation</th>
      </tr>
    </thead>
    <tbody>
      <tr><td style="padding: 8px; border: 1px solid #ddd;">+</td><td style="padding: 8px; border: 1px solid #ddd;">Addition</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd;">-</td><td style="padding: 8px; border: 1px solid #ddd;">Subtraction</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd;">*</td><td style="padding: 8px; border: 1px solid #ddd;">Multiplication</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd;">/</td><td style="padding: 8px; border: 1px solid #ddd;">Division</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd;">%</td><td style="padding: 8px; border: 1px solid #ddd;">Modulo Operation (Remainder after division)</td></tr>
    </tbody>
  </table>

  <h2>Example 1: Arithmetic Operators</h2>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">class Main {
  public static void main(String[] args) {
    
    // declare variables
    int a = 12, b = 5;

    // addition operator
    System.out.println("a + b = " + (a + b));

    // subtraction operator
    System.out.println("a - b = " + (a - b));

    // multiplication operator
    System.out.println("a * b = " + (a * b));

    // division operator
    System.out.println("a / b = " + (a / b));

    // modulo operator
    System.out.println("a % b = " + (a % b));
  }
}</pre>
  </div>

  <h2>Output</h2>
  <div class="output-box">
    a + b = 17<br />
    a - b = 7<br />
    a * b = 60<br />
    a / b = 2<br />
    a % b = 2
  </div>

  <p>
    In the above example, we have used <code>+</code>, <code>-</code>, and <code>*</code> operators to compute addition, subtraction, and multiplication operations.
  </p>

  <h3>/ Division Operator</h3>
  <p>
    Note the operation, <code>a / b</code> in our program. The <code>/</code> operator is the division operator.
  </p>

  <p>
    If we use the division operator with two integers, then the resulting quotient will also be an integer. And, if one of the operands is a floating-point number, the result will also be a floating-point number.
  </p>

  <p>In Java,</p>
  <ul class="styled-list">
    <li><code>9 / 2</code> is 4</li>
    <li><code>9.0 / 2</code> is 4.5</li>
    <li><code>9 / 2.0</code> is 4.5</li>
    <li><code>9.0 / 2.0</code> is 4.5</li>
  </ul>

  <h3>% Modulo Operator</h3>
  <p>
    The modulo operator <code>%</code> computes the remainder. When <code>a = 7</code> is divided by <code>b = 4</code>, the remainder is 3.
  </p>

  <p><strong>Note:</strong> The <code>%</code> operator is mainly used with integers.</p>
</div>

<!-- 2  assignment-->
 <div class="content-container">
  <h1>Java Assignment Operators</h1>

  <p>
    Assignment operators are used in Java to assign values to variables. For example,
  </p>

  <p>
    <code>int age;</code><br />
    <code>age = 5;</code>
  </p>

  <p>
    Here, <code>=</code> is the assignment operator. It assigns the value on its right to the variable on its left. That is, 5 is assigned to the variable <code>age</code>.
  </p>

  <p>Let's see some more assignment operators available in Java.</p>

  <table class="styled-table" style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <thead>
      <tr style="background-color: #e3f2fd;">
        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Operator</th>
        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Example</th>
        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Equivalent to</th>
      </tr>
    </thead>
    <tbody>
      <tr><td style="padding: 8px; border: 1px solid #ddd;">=</td><td style="padding: 8px; border: 1px solid #ddd;">a = b;</td><td style="padding: 8px; border: 1px solid #ddd;">a = b;</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd;">+=</td><td style="padding: 8px; border: 1px solid #ddd;">a += b;</td><td style="padding: 8px; border: 1px solid #ddd;">a = a + b;</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd;">-=</td><td style="padding: 8px; border: 1px solid #ddd;">a -= b;</td><td style="padding: 8px; border: 1px solid #ddd;">a = a - b;</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd;">*=</td><td style="padding: 8px; border: 1px solid #ddd;">a *= b;</td><td style="padding: 8px; border: 1px solid #ddd;">a = a * b;</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd;">/=</td><td style="padding: 8px; border: 1px solid #ddd;">a /= b;</td><td style="padding: 8px; border: 1px solid #ddd;">a = a / b;</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd;">%=</td><td style="padding: 8px; border: 1px solid #ddd;">a %= b;</td><td style="padding: 8px; border: 1px solid #ddd;">a = a % b;</td></tr>
    </tbody>
  </table>

  <h2>Example 2: Assignment Operators</h2>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">class Main {
  public static void main(String[] args) {
    
    // create variables
    int a = 4;
    int var;

    // assign value using =
    var = a;
    System.out.println("var using =: " + var);

    // assign value using +=
    var += a;
    System.out.println("var using +=: " + var);

    // assign value using *=
    var *= a;
    System.out.println("var using *=: " + var);
  }
}</pre>
  </div>

  <h2>Output</h2>
  <div class="output-box">
    var using =: 4<br />
    var using +=: 8<br />
    var using *=: 32
  </div>
</div>

<!-- 3 -->
 <div class="content-container">
  <h1>Java Relational Operators</h1>

  <p>
    Relational operators are used to check the relationship between two operands. For example,
  </p>

  <pre class="code-block" style="margin-top:0;">// check if a is less than b
a &lt; b;
</pre>

  <p>
    Here, <code>&lt;</code> operator is the relational operator. It checks if <code>a</code> is less than <code>b</code> or not.<br/>
    It returns either <code>true</code> or <code>false</code>.
  </p>

  <table class="styled-table" style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <thead>
      <tr style="background-color: #e3f2fd;">
        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Operator</th>
        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Description</th>
        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Example</th>
      </tr>
    </thead>
    <tbody>
      <tr><td style="padding: 8px; border: 1px solid #ddd;">==</td><td style="padding: 8px; border: 1px solid #ddd;">Is Equal To</td><td style="padding: 8px; border: 1px solid #ddd;">3 == 5 returns false</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd;">!=</td><td style="padding: 8px; border: 1px solid #ddd;">Not Equal To</td><td style="padding: 8px; border: 1px solid #ddd;">3 != 5 returns true</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd;">&gt;</td><td style="padding: 8px; border: 1px solid #ddd;">Greater Than</td><td style="padding: 8px; border: 1px solid #ddd;">3 &gt; 5 returns false</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd;">&lt;</td><td style="padding: 8px; border: 1px solid #ddd;">Less Than</td><td style="padding: 8px; border: 1px solid #ddd;">3 &lt; 5 returns true</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd;">&gt;=</td><td style="padding: 8px; border: 1px solid #ddd;">Greater Than or Equal To</td><td style="padding: 8px; border: 1px solid #ddd;">3 &gt;= 5 returns false</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd;">&lt;=</td><td style="padding: 8px; border: 1px solid #ddd;">Less Than or Equal To</td><td style="padding: 8px; border: 1px solid #ddd;">3 &lt;= 5 returns true</td></tr>
    </tbody>
  </table>

  <h2>Example 3: Relational Operators</h2>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">class Main {
  public static void main(String[] args) {
    
    // create variables
    int a = 7, b = 11;

    // value of a and b
    System.out.println("a is " + a + " and b is " + b);

    // == operator
    System.out.println(a == b);  // false

    // != operator
    System.out.println(a != b);  // true

    // > operator
    System.out.println(a &gt; b);  // false

    // < operator
    System.out.println(a &lt; b);  // true

    // >= operator
    System.out.println(a &gt;= b);  // false

    // <= operator
    System.out.println(a &lt;= b);  // true
  }
}</pre>
  </div>

  <h2>Note:</h2>
  <p>Relational operators are used in decision making and loops.</p>
</div>
<!-- 4 -->
 <div class="content-container">
  <h1>Java Logical Operators</h1>

  <p>
    Logical operators are used to check whether an expression is true or false. They are used in decision making.
  </p>

  <table class="styled-table" style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <thead>
      <tr style="background-color: #e3f2fd;">
        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Operator</th>
        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Example</th>
        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Meaning</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;">&& (Logical AND)</td>
        <td style="padding: 8px; border: 1px solid #ddd;">expression1 && expression2</td>
        <td style="padding: 8px; border: 1px solid #ddd;">true only if both expression1 and expression2 are true</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;">|| (Logical OR)</td>
        <td style="padding: 8px; border: 1px solid #ddd;">expression1 || expression2</td>
        <td style="padding: 8px; border: 1px solid #ddd;">true if either expression1 or expression2 is true</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;">! (Logical NOT)</td>
        <td style="padding: 8px; border: 1px solid #ddd;">!expression</td>
        <td style="padding: 8px; border: 1px solid #ddd;">true if expression is false and vice versa</td>
      </tr>
    </tbody>
  </table>

  <h2>Example 4: Logical Operators</h2>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">class Main {
  public static void main(String[] args) {

    // && operator
    System.out.println((5 &gt; 3) &amp;&amp; (8 &gt; 5));  // true
    System.out.println((5 &gt; 3) &amp;&amp; (8 &lt; 5));  // false

    // || operator
    System.out.println((5 &lt; 3) || (8 &gt; 5));  // true
    System.out.println((5 &gt; 3) || (8 &lt; 5));  // true
    System.out.println((5 &lt; 3) || (8 &lt; 5));  // false

    // ! operator
    System.out.println(!(5 == 3));  // true
    System.out.println(!(5 &gt; 3));  // false
  }
}</pre>
  </div>

  <h2>Working of Program</h2>
  <ul class="styled-list">
    <li><code>(5 &gt; 3) &amp;&amp; (8 &gt; 5)</code> returns true because both <code>(5 &gt; 3)</code> and <code>(8 &gt; 5)</code> are true.</li>
    <li><code>(5 &gt; 3) &amp;&amp; (8 &lt; 5)</code> returns false because the expression <code>(8 &lt; 5)</code> is false.</li>
    <li><code>(5 &lt; 3) || (8 &gt; 5)</code> returns true because the expression <code>(8 &gt; 5)</code> is true.</li>
    <li><code>(5 &gt; 3) || (8 &lt; 5)</code> returns true because the expression <code>(5 &gt; 3)</code> is true.</li>
    <li><code>(5 &lt; 3) || (8 &lt; 5)</code> returns false because both <code>(5 &lt; 3)</code> and <code>(8 &lt; 5)</code> are false.</li>
    <li><code>!(5 == 3)</code> returns true because <code>5 == 3</code> is false.</li>
    <li><code>!(5 &gt; 3)</code> returns false because <code>5 &gt; 3</code> is true.</li>
  </ul>
</div>

<!-- 5 -->
 <div class="content-container">
  <h1>Java Unary Operators</h1>

  <p>
    Unary operators are used with only one operand. For example, <code>++</code> is a unary operator that increases the value of a variable by 1. That is, <code>++5</code> will return 6.
  </p>

  <p>Different types of unary operators are:</p>

  <table class="styled-table" style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <thead>
      <tr style="background-color: #e3f2fd;">
        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Operator</th>
        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Meaning</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;">+</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Unary plus: not necessary to use since numbers are positive without using it</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;">-</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Unary minus: inverts the sign of an expression</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;">++</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Increment operator: increments value by 1</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;">--</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Decrement operator: decrements value by 1</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;">!</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Logical complement operator: inverts the value of a boolean</td>
      </tr>
    </tbody>
  </table>

  <h2>Increment and Decrement Operators</h2>
  <p>
    Java also provides increment and decrement operators: <code>++</code> and <code>--</code> respectively. <code>++</code> increases the value of the operand by 1, while <code>--</code> decreases it by 1. For example,
  </p>

  <pre class="code-snippet" style="background:#f4f4f4; padding:10px; border-radius:5px; font-family: monospace;">
int num = 5;

// increase num by 1
++num;
  </pre>
  <p>Here, the value of <code>num</code> gets increased to 6 from its initial value of 5.</p>

  <h2>Example 5: Increment and Decrement Operators</h2>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">class Main {
  public static void main(String[] args) {
    
    // declare variables
    int a = 12, b = 12;
    int result1, result2;

    // original value
    System.out.println("Value of a: " + a);

    // increment operator
    result1 = ++a;
    System.out.println("After increment: " + result1);

    System.out.println("Value of b: " + b);

    // decrement operator
    result2 = --b;
    System.out.println("After decrement: " + result2);
  }
}</pre>
  </div>

  <h2>Output</h2>
  <pre class="output-box" style=" border-left: 4px solid #1976d2; padding: 10px; font-family: monospace;">
Value of a: 12
After increment: 13
Value of b: 12     
After decrement: 11
  </pre>

  <p>
    In the above program, we have used the <code>++</code> and <code>--</code> operator as prefixes (<code>++a</code>, <code>--b</code>). We can also use these operators as postfix (<code>a++</code>, <code>b++</code>).
  </p>
  <p>
    There is a slight difference when these operators are used as prefix versus when they are used as a postfix.
  </p>
  <p>
    To learn more about these operators, visit increment and decrement operators.
  </p>
</div>

<!-- 6 -->
 <div class="content-container">
  <h1>Java Bitwise Operators</h1>

  <p>Bitwise operators in Java are used to perform operations on individual bits. For example,</p>

  <p><strong>Bitwise complement Operation of 35</strong></p>
  <pre class="code-snippet" style="background:#f4f4f4; padding:10px; border-radius:5px; font-family: monospace;">
35 = 00100011 (In Binary)

~ 00100011
  ________
  11011100 = 220 (In decimal)
  </pre>

  <p>Here, <code>~</code> is a bitwise operator. It inverts the value of each bit (0 to 1 and 1 to 0).</p>

  <p>The various bitwise operators present in Java are:</p>

  <table class="styled-table" style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <thead>
      <tr style="background-color: #e3f2fd;">
        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Operator</th>
        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr><td style="padding: 8px; border: 1px solid #ddd;">~</td><td style="padding: 8px; border: 1px solid #ddd;">Bitwise Complement</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd;">&lt;&lt;</td><td style="padding: 8px; border: 1px solid #ddd;">Left Shift</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd;">&gt;&gt;</td><td style="padding: 8px; border: 1px solid #ddd;">Right Shift</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd;">&gt;&gt;&gt;</td><td style="padding: 8px; border: 1px solid #ddd;">Unsigned Right Shift</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd;">&amp;</td><td style="padding: 8px; border: 1px solid #ddd;">Bitwise AND</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd;">^</td><td style="padding: 8px; border: 1px solid #ddd;">Bitwise exclusive OR</td></tr>
    </tbody>
  </table>

  <p>These operators are not generally used in Java. To learn more, visit <a href="https://www.programiz.com/java-programming/bitwise-operators" target="_blank" rel="noopener noreferrer">Java Bitwise and Bit Shift Operators</a>.</p>

  <hr style="margin: 2rem 0; border: none; border-top: 1px solid #ccc;" />

  <h1>Other Operators</h1>

  <h2>Java instanceof Operator</h2>
  <p>The <code>instanceof</code> operator checks whether an object is an instance of a particular class. For example,</p>

  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">class Main {
  public static void main(String[] args) {

    String str = "Programiz";
    boolean result;

    // checks if str is an instance of
    // the String class
    result = str instanceof String;
    System.out.println("Is str an object of String? " + result);
  }
}</pre>
  </div>

  <h3>Output</h3>
  <pre class="output-box" border-left: 4px solid #1976d2; padding: 10px; font-family: monospace;">
Is str an object of String? true
  </pre>

  <p>
    Here, <code>str</code> is an instance of the String class. Hence, the <code>instanceof</code> operator returns true. To learn more, visit <a href="https://www.programiz.com/java-programming/operators#instanceof" target="_blank" rel="noopener noreferrer">Java instanceof</a>.
  </p>
</div>

<!-- 7 -->
 <div class="content-container">
  <h1>Java Ternary Operator</h1>

  <p>The ternary operator (conditional operator) is shorthand for the if-then-else statement. For example,</p>

  <pre class="code-snippet" style="background:#f4f4f4; padding:10px; border-radius:5px; font-family: monospace;">
variable = Expression ? expression1 : expression2
  </pre>

  <p>Here's how it works.</p>
  <ul>
    <li>If the Expression is true, <code>expression1</code> is assigned to the variable.</li>
    <li>If the Expression is false, <code>expression2</code> is assigned to the variable.</li>
  </ul>

  <p>Let's see an example of a ternary operator.</p>

  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">class Java {
  public static void main(String[] args) {

    int februaryDays = 29;
    String result;

    // ternary operator
    result = (februaryDays == 28) ? "Not a leap year" : "Leap year";
    System.out.println(result);
  }
}</pre>
  </div>

  <h3>Output</h3>
  <pre class="output-box" border-left: 4px solid #1976d2; padding: 10px; font-family: monospace;">
Leap year
  </pre>

  <p>In the above example, we have used the ternary operator to check if the year is a leap year or not. To learn more, visit the <a href="https://www.programiz.com/java-programming/ternary-operator" target="_blank" rel="noopener noreferrer">Java ternary operator</a>.</p>
</div>
<!-- 8 -->
 <div class="content-container">
  <h1>Shift Operators</h1>

  <p>Shift operators in Java, namely left shift (<code>&lt;&lt;</code>) and right shift (<code>&gt;&gt;</code>), allow for bit-level manipulation by shifting the bits of a binary number.</p>

  <ul>
    <li><strong>Left Shift:</strong> <code>&lt;&lt;</code></li>
    <li><strong>Signed Right Shift:</strong> <code>&gt;&gt;</code></li>
    <li><strong>Unsigned Right Shift:</strong> <code>&gt;&gt;&gt;</code></li>
  </ul>

  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">public class ShiftOperatorsExample {
    public static void main(String[] args) {
        int number = 10; // Binary: 1010
        
        // Left Shift (&lt;&lt;) - Shifts the bits of the number to the left by specified number of positions
        int leftShiftResult = number &lt;&lt; 2; // Shifting 'number' 2 positions to the left
        System.out.println("Left Shift Result: " + leftShiftResult); // Expected: 40 (Binary: 101000)
        
        // Right Shift (&gt;&gt;) - Shifts the bits of the number to the right by specified number of positions
        int rightShiftResult = number &gt;&gt; 1; // Shifting 'number' 1 position to the right
        System.out.println("Right Shift Result: " + rightShiftResult); // Expected: 5 (Binary: 101)
        
        // Unsigned Right Shift (&gt;&gt;&gt;) - Shifts the bits of the number to the right by specified number of positions, filling the leftmost bits with zeros
        int unsignedRightShiftResult = number &gt;&gt;&gt; 1; // Shifting 'number' 1 position to the right
        System.out.println("Unsigned Right Shift Result: " + unsignedRightShiftResult); // Expected: 5 (Binary: 101)
    }
}</pre>
  </div>

  <h3>Output</h3>
  <pre class="output-box" style=" border-left: 4px solid #1976d2; padding: 10px; font-family: monospace;">
Left Shift Result: 40
Right Shift Result: 5
Unsigned Right Shift Result: 5
  </pre>
</div>

<!-- freq -->
<div class="faq-container" style="background: #f1f8ff; border: 1px solid #1976d2; border-radius: 8px; padding: 20px; margin-top: 2rem; font-family: Arial, sans-serif;">
  <h2 style="color: #0d47a1; margin-bottom: 1rem;">Frequently Asked Questions (FAQs)</h2>

  <h3>Q1: What is the difference between signed and unsigned right shift?</h3>
  <p>
    The signed right shift (<code>&gt;&gt;</code>) preserves the sign bit (leftmost bit), so it fills the left bits with the sign bit (0 for positive, 1 for negative numbers). The unsigned right shift (<code>&gt;&gt;&gt;</code>) always fills the left bits with zeros, regardless of the sign.
  </p>

  <h3>Q2: When should I use left shift operator?</h3>
  <p>
    Use the left shift operator (<code>&lt;&lt;</code>) when you want to multiply a number by powers of two efficiently (e.g., shifting by 1 multiplies by 2, shifting by 2 multiplies by 4).
  </p>

  <h3>Q3: Can shift operators be used on negative numbers?</h3>
  <p>
    Yes, but the signed right shift preserves the sign bit while shifting, and the unsigned right shift does not, which can lead to different results.
  </p>

  <p style="margin-top: 1rem;">
    For more details and advanced examples, visit the official documentation: 
    <a href="https://docs.oracle.com/javase/tutorial/java/nutsandbolts/op3.html" target="_blank" rel="noopener noreferrer" style="color: #1976d2; text-decoration: none;">Java Shift Operators - Oracle Docs</a>
  </p>
</div>
<!-- reference -->
 <div class="references-container">
    <h3>References & Further Reading</h3>
    <ul class="references-list">
      <li><a href="https://docs.oracle.com/javase/tutorial/java/nutsandbolts/while.html" target="_blank" rel="noopener noreferrer">Oracle Docs: While and Do-While Loops</a></li>
      <li><a href="https://www.geeksforgeeks.org/loops-in-java/" target="_blank" rel="noopener noreferrer">GeeksforGeeks: Loops in Java</a></li>
      <li><a href="https://www.javatpoint.com/java-for-loop" target="_blank" rel="noopener noreferrer">JavaTpoint: Java For Loop</a></li>
      <li><a href="https://www.programiz.com/java-programming/operators" target="_blank" rel="noopener noreferrer">programiz:operators/a></li>
    </ul>
  </div>
    `
  },
   loops: {
    id: "loops",
    title: "Variables in Java",
    description: `
     <div class="content-container">
  <h1>Looping Statements in Java with Examples</h1>

  <p>
    In Java programming, looping statements allow the execution of a block of code multiple times based on a given condition.
    They are essential for tasks that require repetition, such as traversing arrays, automating calculations, and handling repeated input/output operations.
  </p>

  <p>
    A loop continues executing as long as a certain condition remains true. Once the condition becomes false, the loop stops.
  </p>

  <h2>Types of Looping Statements in Java</h2>
  <ul>
    <li><strong><code>for</code> loop</strong>: Used when the number of iterations is known.</li>
    <li><strong><code>while</code> loop</strong>: Used when the number of iterations is not known and the condition is checked before the loop runs.</li>
    <li><strong><code>do-while</code> loop</strong>: Similar to <code>while</code>, but the condition is checked after the loop executes at least once.</li>
  </ul>

 
</div>
<!-- for loop -->
 <div class="content-container">
  <h2>For Loop in Java</h2>

  <p>
    The <strong>for loop</strong> in Java is used when the number of iterations is known. It repeatedly executes a block of code as long as the condition remains true. It's compact and often used for counting.
  </p>

  <h3>Syntax:</h3>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <div class="code-block">
      <pre class="code-snippet">for(initialization; condition; increment/decrement)
{
    // Statements to execute
}</pre>
    </div>
  </div>

  <p>
    - <strong>Initialization</strong>: Sets the loop control variable.<br>
    - <strong>Condition</strong>: Evaluated before every iteration. Loop ends when false.<br>
    - <strong>Increment/Decrement</strong>: Changes the loop control variable each iteration.
  </p>

  <h3>Flowchart of For Loop:</h3>
  <img src="https://dotnettutorials.net/wp-content/uploads/2020/08/For-loop-Looping-Statement-Flow-Chart-in-Java.png" alt="For Loop Flowchart" style="max-width:100%; border:1px solid #ccc; border-radius:8px;">

  <h3>Sample Program:</h3>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <div class="code-block">
      <pre class="code-snippet">class ForLoopDemo 
{ 
    public static void main(String args[]) 
    { 
       for(int num = 1; num <= 5; num++)
       {
           System.out.println(num);
       }
    } 
}</pre>
    </div>
  </div>

  <h3>Output:</h3>
  <div class="output-box">
    1<br>2<br>3<br>4<br>5
  </div>
</div>

<!-- enhanced for loop -->
 <div class="content-container">
  <h2>Enhanced for Loop in Java</h2>

  <p>
    The <strong>enhanced for loop</strong> provides a more readable way to iterate through elements of arrays or collections. It eliminates the need for an index variable and is best used when you simply want to traverse all items sequentially without modifying them.
  </p>

  <p>
    Note: The elements accessed using the enhanced for loop are effectively read-only. If you need to update the array or collection values, a traditional loop should be used.
  </p>

  <h3>Syntax:</h3>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <div class="code-block">
      <pre class="code-snippet">for (T element : Collection/Array) 
{
    // Statements
}</pre>
    </div>
  </div>

  <h3>Sample Program:</h3>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <div class="code-block">
      <pre class="code-snippet">public class EnhancedforloopDemo 
{ 
    public static void main(String args[]) 
    { 
        String array[] = {"Ron", "Harry", "Hermoine"}; 
  
        // Enhanced for loop 
        for (String x : array) 
        { 
            System.out.println(x); 
        } 
  
        /* Equivalent traditional for loop 
        for (int i = 0; i &lt; array.length; i++) 
        { 
            System.out.println(array[i]); 
        } 
        */
    } 
}</pre>
    </div>
  </div>

  <h3>Output:</h3>
  <div class="output-box">
    Ron<br>Harry<br>Hermoine
  </div>
</div>
<!-- while loop -->
 <div class="content-container">
  <h2>While Loop in Java</h2>

  <p>
    The <strong>while loop</strong> in Java is used to repeatedly execute a block of statements as long as a specified condition remains true. This loop is useful when you don’t know in advance how many times a block of code should run.
  </p>

  <p>
    The loop first evaluates the condition. If it’s true, the loop body runs. After each iteration, the condition is evaluated again. The loop ends once the condition becomes false.
  </p>

  <h3>Syntax:</h3>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <div class="code-block">
      <pre class="code-snippet">while (condition) 
{
    // Statements
}</pre>
    </div>
  </div>

  <h3>Flow Chart of While Loop:</h3>
  <div class="image-container">
    <img src="https://dotnettutorials.net/wp-content/uploads/2020/08/While-Loop-Looping-Statement-Flow-Chart-in-Java.png" alt="While Loop Flowchart in Java">
  </div>

  <h3>Sample Program:</h3>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <div class="code-block">
      <pre class="code-snippet">class whileLoopDemo 
{ 
    public static void main(String args[]) 
    { 
        int x = 1; 
  
        // Exit when x becomes greater than 4 
        while (x <= 4) 
        { 
            System.out.println("Value of x: " + x); 
            x++; 
        } 
    } 
}</pre>
    </div>
  </div>

  <h3>Output:</h3>
  <div class="output-box">
    Value of x: 1<br>
    Value of x: 2<br>
    Value of x: 3<br>
    Value of x: 4
  </div>
</div>

<!-- do while -->

<div class="content-container">
  <h2>Do-while Loop in Java</h2>

  <p>
    The <strong>do-while loop</strong> in Java is similar to the while loop, but with one key difference: it evaluates the condition after executing the loop body. This means the code inside the <code>do</code> block will run at least once, even if the condition is false from the start.
  </p>

  <p>
    Also, remember that the <code>do-while</code> loop ends with a semicolon, and the condition must return a boolean value.
  </p>

  <h3>Syntax:</h3>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <div class="code-block">
      <pre class="code-snippet">do 
{
    // Statements
} 
while (condition);</pre>
    </div>
  </div>

  <h3>Flow Chart of Do-while Loop:</h3>
  <div class="image-container">
    <img src="https://dotnettutorials.net/wp-content/uploads/2020/08/Do-While-Loop-Looping-Statements-Flow-Chart-in-Java.png" alt="Do-While Loop Flowchart in Java">
  </div>

  <h3>Sample Program:</h3>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <div class="code-block">
      <pre class="code-snippet">class dowhileloopDemo 
{ 
    public static void main(String args[]) 
    { 
        int x = 21; 
        do
        { 
            // This line runs even if condition is false
            System.out.println("Value of x: " + x); 
            x++; 
        } 
        while (x < 20); 
    } 
}</pre>
    </div>
  </div>

  <h3>Output:</h3>
  <div class="output-box">
    Value of x: 21
  </div>
</div>


 <div class="references-container">
    <h3>References & Further Reading</h3>
    <ul class="references-list">
      <li><a href="https://docs.oracle.com/javase/tutorial/java/nutsandbolts/while.html" target="_blank" rel="noopener noreferrer">Oracle Docs: While and Do-While Loops</a></li>
      <li><a href="https://www.geeksforgeeks.org/loops-in-java/" target="_blank" rel="noopener noreferrer">GeeksforGeeks: Loops in Java</a></li>
      <li><a href="https://www.javatpoint.com/java-for-loop" target="_blank" rel="noopener noreferrer">JavaTpoint: Java For Loop</a></li>
      <li><a href="https://dotnettutorials.net/lesson/looping-statements-in-java/" target="_blank" rel="noopener noreferrer">DotNetTutorials: Looping Statements in Java</a></li>
    </ul>
  </div>
    `
  },

  branching: {
    id: "branching",
    title: "Branching in Java",
    description: `
    <div class="content-container">


  <p>
    In Java, <strong>branching statements</strong> allow you to alter the normal sequential flow of execution in a program. These statements are typically used within control structures (like loops and conditionals) to jump to another part of the program.
  </p>  

  <p>
    Branching is especially useful when you need to skip parts of the code, terminate loops early, or return values from methods.
  </p>

  <h2>Types of Branching Statements in Java</h2>
  <ul class="styled-list">
    <li><strong>break</strong> Statement</li>
    <li><strong>continue</strong> Statement</li>
    <li><strong>return</strong> Statement</li>
  </ul>
</div>

<!-- break -->
 <div class="content-container">
  <h1>Break Statement in Java</h1>

  <p>
    The <strong>break</strong> statement is used to exit from a loop prematurely. It immediately terminates the loop and transfers control to the statement following the loop.
  </p>

  <p>
    <strong>Note:</strong> If the break is used inside nested loops, it will only terminate the <em>innermost</em> loop.
  </p>

  <h3>Syntax:</h3>
  <pre class="code-block">
break; // or break label;
  </pre>
  

  <h3>Sample Program:</h3>
    <div class="code-container">
       <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
      <pre class="code-block">
class BreakStatementDemo 
{ 
    public static void main(String args[]) 
    { 
        // Initially loop is set to run from 0-9 
        for (int i = 0; i < 10; i++) 
        { 
            // terminate loop when i is 5. 
            if (i == 5) 
                break; 
  
            System.out.println("i: " + i); 
        } 
        System.out.println("Loop complete."); 
    } 
}
  </pre>
    </div>
   

  <h3>Output:</h3>
  <div class="output-box">
    i: 0<br>
    i: 1<br>
    i: 2<br>
    i: 3<br>
    i: 4<br>
    Loop complete.
  </div>
</div>

<!-- continue -->
 <div class="content-container">
  <h1>Continue Statement in Java</h1>

  <p>
    The <strong>continue</strong> statement is used to <em>skip the current iteration</em> of a loop and proceed to the next one. It is useful when you want to skip certain conditions without terminating the loop completely.
  </p>

  <p>
    It can be used inside <code>for</code>, <code>while</code>, or <code>do-while</code> loops.
  </p>

  <h3>Sample Program:</h3>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
     <pre class="code-block">
class ContinueStatementDemo 
{ 
    public static void main(String args[]) 
    { 
        for (int i = 0; i < 10; i++) 
        { 
            // If the number is even 
            // skip and continue 
            if (i % 2 == 0) 
                continue; 
  
            // If number is odd, print it 
            System.out.print(i + " "); 
        } 
    } 
}
  </pre>
  </div>

  

  <h3>Output:</h3>
  <div class="output-box">
    1 3 5 7 9
  </div>
</div>
<!-- return -->
 <div class="content-container">
  <h1>Return Statement in Java</h1>

  <p>
    The <strong>return</strong> statement is used to exit from the current method and optionally return a value to the caller. It immediately ends method execution and transfers control back to the point where the method was called.
  </p>

  <p>
    When a method declares a return type (non-void), the returned value must match the declared type. For <code>void</code> methods, use <code>return;</code> without any value to exit the method early.
  </p>

  <h3>Sample Program:</h3>
  <div class="code-container">
     <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>

     <pre class="code-block">
class ReturnStatementDemo
{ 
    public static void main(String args[]) 
    { 
        boolean t = true; 
        System.out.println("Before the return."); 
      
        if (t) 
            return; 
  
        // Compiler will bypass every statement  
        // after return 
        System.out.println("This won't execute."); 
    } 
}
  </pre>
  </div>
 
 
  <h3>Output:</h3>
  <div class="output-box">
    Before the return.
  </div>
</div>



 <div class="references-container">
    <h3>References & Further Reading</h3>
    <ul class="references-list">
      <li><a href="https://docs.oracle.com/javase/tutorial/java/nutsandbolts/while.html" target="_blank" rel="noopener noreferrer">Oracle Docs: While and Do-While Loops</a></li>
      <li><a href="https://www.geeksforgeeks.org/loops-in-java/" target="_blank" rel="noopener noreferrer">GeeksforGeeks: Loops in Java</a></li>
      <li><a href="https://www.javatpoint.com/java-for-loop" target="_blank" rel="noopener noreferrer">JavaTpoint: Java For Loop</a></li>
      <li><a href="https://dotnettutorials.net/lesson/branching-statements-in-java/" target="_blank" rel="noopener noreferrer">DotNetTutorials: Looping Statements in Java</a></li>
    </ul>
  </div>
    `
  }
};
