// src/data/contentData.js
export const contentMap = {
 
  variables: {
    id: "variables",
    title: "",
    description: `
     <div class="content-container">
  <h1>Variables in Java</h1>
  <p>In Java, a <strong>variable</strong> is a symbolic name for a memory location that stores data used by a program. Variables are essential for handling dynamic data and enabling interaction within programs.</p>

  <h3>Key Features of Variables</h3>
  <ul class="bullet-list">
    <li>Temporarily store data during program execution.</li>
    <li>Act as containers for various data types (e.g., numbers, text, boolean).</li>
    <li>Enhance program flexibility by managing changing data.</li>
  </ul>

  <h3>Java Variable Declaration Syntax</h3>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">dataType variableName = value;</pre>
  </div>
  <ul class="bullet-list">
    <li><strong>dataType:</strong> Defines the type of data (e.g., int, double, String).</li>
    <li><strong>variableName:</strong> The identifier for accessing the variable.</li>
    <li><strong>value:</strong> (Optional) Initial value assigned during declaration.</li>
  </ul>

  <h3>Types of Variables in Java</h3>
  <ol class="numbered-list">
    <li><strong>Local Variables:</strong> Declared inside methods, constructors, or blocks. Accessible only within the declared scope.</li>
    <li><strong>Instance Variables:</strong> Declared inside a class but outside any method. Each object gets its own copy.</li>
    <li><strong>Static Variables:</strong> Declared with the <code>static</code> keyword. Shared among all objects of the class.</li>
  </ol>

  <h3>Declaring Variables in Java</h3>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">int number;
String name;
double price;</pre>
  </div>
  <p>Variables must be declared before use. This allows the compiler to allocate memory accordingly.</p>

  <h3>Initializing Variables in Java</h3>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">int experience = 5;  // Direct initialization
String domain = "Java Programming";  // String initialization

double stipend;
stipend = 15000.75;  // Initialized later</pre>
  </div>

  <h3>Variable Naming Conventions in Java</h3>
  <ul class="bullet-list">
    <li>Must begin with a letter, underscore (_) or dollar sign ($).</li>
    <li>Cannot start with a digit.</li>
    <li>No spaces or special characters except _ and $.</li>
    <li>Avoid using Java reserved keywords.</li>
    <li>Use camelCase (e.g., javaProgram).</li>
  </ul>

  <h3>Example: Local Variable</h3>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">public class LocalExample {
  public void displayCount() {
    int count = 50;
    System.out.println("Total MCQs: " + count);
  }
}</pre>
  </div>
  <div class="output-section"><strong>Output:</strong> Total MCQs: 50</div>

  <h3>Example: Instance Variable</h3>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">public class Quiz {
  int totalMarks = 100;

  public void displayMarks() {
    int scored = 80;
    System.out.println("Total Marks: " + totalMarks);
    System.out.println("Marks Scored: " + scored);
  }
}</pre>
  </div>
  <div class="output-section"><strong>Output:</strong> Total Marks: 100<br>Marks Scored: 80</div>

  <h3>Example: Static Variable</h3>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">public class TestSeries {
  static int totalQuizzes = 1000;

  public static void displayQuizzes() {
    System.out.println("Total Quizzes: " + totalQuizzes);
  }
}</pre>
  </div>
  <div class="output-section"><strong>Output:</strong> Total Quizzes: 1000</div>

  <h3>Type Inference with <code>var</code> (Java 10+)</h3>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">public class VarExample {
  public static void main(String[] args) {
    var mcqs = 500;
    var name = "Sanfoundry";
    var fee = 1499.99;
    System.out.println("Total MCQs: " + mcqs);
    System.out.println("Website Name: " + name);
    System.out.println("Course Fee: $" + fee);
  }
}</pre>
  </div>
  <div class="output-section"><strong>Output:</strong><br>Total MCQs: 500<br>Website Name: Sanfoundry<br>Course Fee: $1499.99</div>

  <h3>Instance vs Static Variables</h3>
  <table>
    <tr><th>Feature</th><th>Instance Variables</th><th>Static Variables</th></tr>
    <tr><td>Definition</td><td>Belong to an object</td><td>Belong to the class</td></tr>
    <tr><td>Memory Allocation</td><td>Created per object</td><td>Created once for the class</td></tr>
    <tr><td>Access Method</td><td>objectName.variableName</td><td>ClassName.variableName</td></tr>
    <tr><td>Default Value</td><td>Yes</td><td>Yes</td></tr>
    <tr><td>Shared?</td><td>No</td><td>Yes</td></tr>
    <tr><td>Example</td><td>int age;</td><td>static int totalStudents;</td></tr>
  </table>

  <h3>Advantages of Using Variables</h3>
  <ul class="bullet-list">
    <li>Code Reusability</li>
    <li>Flexibility</li>
    <li>Efficient Memory Management</li>
    <li>Improved Readability</li>
    <li>Supports Data Manipulation</li>
    <li>Encapsulation and Scope Control</li>
  </ul>

  <h3>Limitations</h3>
  <ul class="bullet-list">
    <li>Memory Consumption if used excessively</li>
    <li>Scope Restrictions for local variables</li>
    <li>Strict Type Constraints</li>
    <li>Uninitialized local variables cause errors</li>
    <li>Potential for logic/runtime errors</li>
  </ul>
</div>
    `
  },

    datatypes: {
    id: "datatypes",
    title: "",
    description: `
    <div class="content-container">
  <h1>Java Primitive Data Types – Explained Simply</h1>

  <p>Java is a <strong>statically-typed</strong> language, meaning every variable must be declared with a specific data type:</p>

  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">int gear = 1;</pre>
  </div>

  <h3>What Are Primitive Data Types?</h3>
  <p>Java provides <strong>8 primitive data types</strong> which are built-in and not objects.</p>

<div 
class="table-container">

<table class="styled-table" style="width: 100%; border-collapse: collapse; margin-top: 1rem; font-size: 1rem;">
  <thead>
    <tr style="background-color: #e3f2fd;">
      <th style="padding: 10px; border: 1px solid #ccc; text-align: left;">Data Type</th>
      <th style="padding: 10px; border: 1px solid #ccc; text-align: left;">Size</th>
      <th style="padding: 10px; border: 1px solid #ccc; text-align: left;">Range</th>
      <th style="padding: 10px; border: 1px solid #ccc; text-align: left;">Use Case</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 10px; border: 1px solid #ccc;">byte</td>
      <td style="padding: 10px; border: 1px solid #ccc;">8-bit</td>
      <td style="padding: 10px; border: 1px solid #ccc;">-128 to 127</td>
      <td style="padding: 10px; border: 1px solid #ccc;">Memory-efficient arrays</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ccc;">short</td>
      <td style="padding: 10px; border: 1px solid #ccc;">16-bit</td>
      <td style="padding: 10px; border: 1px solid #ccc;">-32,768 to 32,767</td>
      <td style="padding: 10px; border: 1px solid #ccc;">Slightly larger than byte</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ccc;">int</td>
      <td style="padding: 10px; border: 1px solid #ccc;">32-bit</td>
      <td style="padding: 10px; border: 1px solid #ccc;">-2<sup>31</sup> to 2<sup>31</sup>–1</td>
      <td style="padding: 10px; border: 1px solid #ccc;">Default integer type</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ccc;">long</td>
      <td style="padding: 10px; border: 1px solid #ccc;">64-bit</td>
      <td style="padding: 10px; border: 1px solid #ccc;">-2<sup>63</sup> to 2<sup>63</sup>–1</td>
      <td style="padding: 10px; border: 1px solid #ccc;">For large numbers</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ccc;">float</td>
      <td style="padding: 10px; border: 1px solid #ccc;">32-bit</td>
      <td style="padding: 10px; border: 1px solid #ccc;">±3.4e38</td>
      <td style="padding: 10px; border: 1px solid #ccc;">Less precise decimals</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ccc;">double</td>
      <td style="padding: 10px; border: 1px solid #ccc;">64-bit</td>
      <td style="padding: 10px; border: 1px solid #ccc;">±1.8e308</td>
      <td style="padding: 10px; border: 1px solid #ccc;">Default decimal type</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ccc;">boolean</td>
      <td style="padding: 10px; border: 1px solid #ccc;">1-bit</td>
      <td style="padding: 10px; border: 1px solid #ccc;">true or false</td>
      <td style="padding: 10px; border: 1px solid #ccc;">Logic checks</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ccc;">char</td>
      <td style="padding: 10px; border: 1px solid #ccc;">16-bit</td>
      <td style="padding: 10px; border: 1px solid #ccc;">Unicode <code>\u0000</code> to <code>\uffff</code></td>
      <td style="padding: 10px; border: 1px solid #ccc;">Single character</td>
    </tr>
  </tbody>
</table>


</div>

  <h2>Default Values for Fields</h2>
<div>

<table class="styled-table" style="width: 100%; border-collapse: collapse; margin-top: 1rem; font-size: 1rem;margin-bottom:6px">
  <thead>
    <tr style="background-color: #e3f2fd;">
      <th style="padding: 10px; border: 1px solid #ccc; text-align: left;">Data Type</th>
      <th style="padding: 10px; border: 1px solid #ccc; text-align: left;">Default Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 10px; border: 1px solid #ccc;">byte, short, int, long</td>
      <td style="padding: 10px; border: 1px solid #ccc;">0, 0L</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ccc;">float, double</td>
      <td style="padding: 10px; border: 1px solid #ccc;">0.0f, 0.0d</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ccc;">char</td>
      <td style="padding: 10px; border: 1px solid #ccc;"><code>'\u0000'</code></td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ccc;">boolean</td>
      <td style="padding: 10px; border: 1px solid #ccc;">false</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ccc;">String / Objects</td>
      <td style="padding: 10px; border: 1px solid #ccc;">null</td>
    </tr>
  </tbody>
</table>


</div>
  <p><strong>Note:</strong> Local variables <u>do not</u> get default values. You must initialize them!</p>

  <h2>Literals in Java</h2>
  <p>Fixed values assigned directly to variables.</p>
  <div class="code-container">
    <pre class="code-block">boolean result = true;
char letter = 'A';
int number = 100;
float pi = 3.14f;</pre>
  </div>

  <h3>Integer Literal Types</h3>
  <ul class="bullet-list">
    <li><strong>Default:</strong> int</li>
    <li><strong>Use L for long:</strong> <code>long big = 12345678900L;</code></li>
  </ul>

  <h3>Number Systems</h3>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">int decimal = 26;
int hex = 0x1A;
int binary = 0b11010;</pre>
  </div>

  <h3>Floating-Point Literals</h3>
  <p>Default type is <code>double</code>. Use <code>f</code> for float.</p>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">double d1 = 123.4;
double d2 = 1.234e2; // scientific notation
float f1 = 123.4f;</pre>
  </div>

  <h3>Character & String Literals</h3>
  <ul class="bullet-list">
    <li><code>char</code> uses single quotes. <code>String</code> uses double quotes.</li>
  </ul>

  <h4>Escape Sequences</h4>
 <div class="table-container">
 <table class="styled-table" style="width: 100%; border-collapse: collapse; margin-top: 1rem; font-size: 1rem;margin-bottom:6px">
  <thead>
    <tr style="background-color: #e3f2fd;">
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Escape</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;"><code>\\n</code></td>
      <td style="padding: 8px; border: 1px solid #ddd;">New line</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;"><code>\\t</code></td>
      <td style="padding: 8px; border: 1px solid #ddd;">Tab</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;"><code>\\\\</code></td>
      <td style="padding: 8px; border: 1px solid #ddd;">Backslash</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;"><code>\\'</code></td>
      <td style="padding: 8px; border: 1px solid #ddd;">Single quote</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;"><code>\\&quot;</code></td>
      <td style="padding: 8px; border: 1px solid #ddd;">Double quote</td>
    </tr>
  </tbody>
</table>

 
 
 </div>

  <h3>null and Class Literals</h3>
  <ul class="bullet-list">
    <li><code>null</code> is for objects, not primitives.</li>
    <li><code>String.class</code> refers to class metadata.</li>
  </ul>

  <h3>Underscores in Numeric Literals (Java 7+)</h3>
  <div class="code-container">
    <pre class="code-block">int million = 1_000_000;
long card = 1234_5678_9012_3456L;
byte bits = 0b0010_0101;</pre>
  </div>

  <h4>Invalid Usage</h4>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">int x = _52;
float y = 3_.14f;
long z = 999_99_9999_L;</pre>
  </div>

  <h3>Summary</h3>
  <ul class="bullet-list">
    <li><strong>8 primitive types:</strong> byte, short, int, long, float, double, boolean, char</li>
    <li><strong>Default values:</strong> Only for fields, not for local variables</li>
    <li><strong>Literals:</strong> Fixed values like <code>100</code>, <code>'A'</code>, <code>true</code></li>
    <li><strong>Use underscores:</strong> For readable numbers (Java 7+)</li>
    <li><strong>String:</strong> Not a primitive, but supported specially</li>
  </ul>
</div>
    `
  },
  
  introduction: {
    id: "introduction",
    title: "Introduction to Java",
    description: `
     <div class="content-container">
  <h1>Understanding JDK, JRE, and JVM in Java</h1>

  <h2>About Java Founder</h2>
  <p>
    Java was created by <strong>James Gosling</strong> in 1995 at Sun Microsystems.
    Initially named <strong>Oak</strong>, it was later renamed to <strong>Java</strong>, inspired by Java coffee.
    Java is now maintained by <strong>Oracle Corporation</strong>.
  </p>

  <h2>What are JDK, JRE, and JVM?</h2>
  <p>
    These are the three core components of the Java environment. Understanding them is essential for writing and running Java programs effectively:
  </p>

  <ul class="bullet-list">
    <li><strong>JDK (Java Development Kit):</strong> Includes tools for developing Java applications — compiler, debugger, and JRE.</li>
    <li><strong>JRE (Java Runtime Environment):</strong> Allows running Java programs. It includes JVM and standard class libraries.</li>
    <li><strong>JVM (Java Virtual Machine):</strong> Executes compiled bytecode by converting it into machine-specific instructions.</li>
  </ul>

  <h2>Comparison Table</h2>
  <div class="table-container">
    <table class="styled-table" style="width: 100%; border-collapse: collapse; margin-top: 1rem; font-size: 1rem;">
  <thead>
    <tr style="background-color: #e3f2fd;">
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Aspect</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">JDK</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">JRE</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">JVM</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;"><strong>Purpose</strong></td>
      <td style="padding: 8px; border: 1px solid #ddd;">Develop and run Java applications</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Run Java applications</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Execute compiled bytecode</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;"><strong>Includes</strong></td>
      <td style="padding: 8px; border: 1px solid #ddd;">JRE + compiler, debugger, etc.</td>
      <td style="padding: 8px; border: 1px solid #ddd;">JVM + standard libraries</td>
      <td style="padding: 8px; border: 1px solid #ddd;">ClassLoader, JIT compiler, Garbage Collector</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;"><strong>Use Case</strong></td>
      <td style="padding: 8px; border: 1px solid #ddd;">Writing, compiling, and testing code</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Running Java applications</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Executing bytecode instructions</td>
    </tr>
  </tbody>
</table>

  </div>

  <p>
    <strong>Note:</strong> Java bytecode is platform-independent, but each JVM implementation is platform-specific to interact with the host OS.
  </p>

  <h2>Component Workflow</h2>

  <h3>JDK - Development</h3>
  <p>
    The JDK is used by developers to write, compile, and test Java applications:
  </p>
  <ul class="bullet-list">
    <li>Developers write code in <code>.java</code> files.</li>
    <li>The <code>javac</code> compiler converts the source code to bytecode (<code>.class</code> files).</li>
    <li>Bytecode is passed to the JVM for execution.</li>
  </ul>

  <div class="code-container">
    <pre class="code-block">javac HelloWorld.java</pre>
  </div>

  <h3>JRE - Runtime Environment</h3>
  <p>
    The JRE provides the runtime environment for Java applications:
  </p>
  <ul class="bullet-list">
    <li>Loads and verifies bytecode files.</li>
    <li>Uses the JVM to execute the code.</li>
    <li>Provides core libraries and manages system resources.</li>
  </ul>

  <h3>JVM - Execution Engine</h3>
  <p>
    JVM is the core of the Java platform. It:
  </p>
  <ul class="bullet-list">
    <li>Converts bytecode into machine code for execution.</li>
    <li>Manages memory via Garbage Collection.</li>
    <li>Handles runtime exceptions and provides system-level optimizations like JIT compilation.</li>
  </ul>
</div>

<div class="content-container">
  <h1>JDK, JRE, and JVM in Java</h1>

  <h2>Additional Responsibilities of JVM</h2>
  <ul class="bullet-list">
    <li>Loads, verifies, and links classes.</li>
    <li>Performs Just-In-Time (JIT) compilation for performance.</li>
    <li>Manages garbage collection and optimization at runtime.</li>
  </ul>

  <h2>Conclusion</h2>
  <p>
    JDK, JRE, and JVM form the backbone of Java's <strong>write-once, run-anywhere</strong> philosophy. Understanding how they interact helps in developing efficient and portable Java applications.
  </p>

  <h2>Visual Diagram</h2>
  <p>Refer to the diagram below to understand the flow from source code to execution:</p>
  <img src="https://media.geeksforgeeks.org/wp-content/uploads/20210218150010/JDK.png" alt="JDK JRE JVM Flowchart" style="max-width: 100%; border: 1px solid #ccc; border-radius: 10px;">

  <h2>Summary</h2>
  <ul class="bullet-list">
    <li><strong>JDK:</strong> For writing and compiling Java programs.</li>
    <li><strong>JRE:</strong> For running Java programs.</li>
    <li><strong>JVM:</strong> For executing Java bytecode.</li>
  </ul>

  <h2>How to Install Java</h2>

  <h3>Installing Java on Windows (7, 8, 10, 11)</h3>
  <ol class="bullet-list">
    <li><strong>Download the Java JDK Installer:</strong>
      <ul class="bullet-list">
        <li>Visit <a href="https://www.oracle.com/in/java/" target="_blank">Oracle Java Downloads</a></li>
        <li>Click <strong>Download Java</strong> → Select <strong>Windows tab</strong></li>
        <li>Choose latest version (e.g., JDK 23) → Download x64 Installer (.exe)</li>
      </ul>
    </li>

    <li><strong>Run the Installer:</strong>
      <ul class="bullet-list">
        <li>Double-click the file (e.g., <code>jdk-23_windows-x64_bin.exe</code>)</li>
        <li>Follow setup: Next → Choose install location → Next → Finish</li>
      </ul>
    </li>

    <li><strong>Set Environment Variables:</strong>
      <ul class="bullet-list">
        <li>Copy path: <code>C:\\Program Files\\Java\\jdk-23\\bin</code></li>
        <li>Search “Environment Variables” → Open System Properties</li>
        <li>Edit Path under System Variables → Add New → Paste the path</li>
      </ul>
    </li>

    <li><strong>Verify Installation:</strong>
      <div class="code-container">
        <pre class="code-block">java --version</pre>
      </div>
      <div class="output-box">
        Expected output: <br>
        java 23 <br>
        Java(TM) SE Runtime Environment ...
      </div>
    </li>

    <li><strong>Run Your First Java Program:</strong>
      <div class="code-container">
        <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
        <pre class="code-block">public class file {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}</pre>
      </div>

      <ul class="bullet-list">
        <li>Save file as <code>file.java</code></li>
        <li>Open Command Prompt → Navigate to file location</li>
      </ul>

      <div class="code-container">
        <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
        <pre class="code-block">javac file.java
java file</pre>
      </div>
      <div class="output-box">Output: Hello, Java!</div>
    </li>
  </ol>

  <h3>Installing Java on Linux (Ubuntu)</h3>
  <ol class="bullet-list">
    <li ><strong>Download the Java JDK:</strong>
      <ul class="bullet-list">
        <li>Go to Oracle's Java Page → Accept license → Choose Linux → Download <code>.tar.gz</code> file</li>
      </ul>
    </li>

    <li><strong>Extract and Move Java:</strong>
      <div class="code-container">
        <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
        <pre class="code-block">cd ~/Downloads
tar -xvzf jdk-23_linux-x64_bin.tar.gz
sudo mv jdk-23 /opt/</pre>
      </div>
    </li>

    <li><strong>Set Environment Variables:</strong>
      <div class="code-container">
        <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
        <pre class="code-block">nano ~/.bashrc</pre>
      </div>
      Add the following lines at the bottom:
      <div class="code-container">
        <pre class="code-block">export JAVA_HOME=/opt/jdk-23
export PATH=$JAVA_HOME/bin:$PATH</pre>
      </div>
      Apply changes:
      <div class="code-container">
        <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
        <pre class="code-block">source ~/.bashrc</pre>
      </div>
    </li>

    <li><strong>Verify Installation:</strong>
      <div class="code-container">
        <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
        <pre class="code-block">java --version</pre>
      </div>
      <div class="output-box">Expected output: java 23<br>Java(TM) SE Runtime Environment ...</div>
    </li>
  </ol>

  <h1>Installing Java on macOS</h1>
  <ol class="bullet-list">
    <li><strong>Download Java JDK:</strong>
      <ul class="bullet-list">
        <li>Visit Oracle’s Java website and download the macOS installer (.dmg)</li>
      </ul>
    </li>

    <li><strong>Install Java:</strong>
      <ul class="bullet-list">
        <li>Open downloaded .dmg → Run installer and follow prompts</li>
      </ul>
    </li>

    <li><strong>Set Environment Variables (Optional):</strong>
      <div class="code-container">
        <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
        <pre class="code-block">nano ~/.zshrc</pre>
      </div>
      Add the following lines:
      <div class="code-container">
        <pre class="code-block">export JAVA_HOME=$(/usr/libexec/java_home)
export PATH=$JAVA_HOME/bin:$PATH</pre>
      </div>
      Apply changes:
      <div class="code-container">
        <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
        <pre class="code-block">source ~/.zshrc</pre>
      </div>
    </li>

    <li><strong>Verify Installation:</strong>
      <div class="code-container">
        <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
        <pre class="code-block">java --version</pre>
      </div>
    </li>
  </ol>
</div>

<div class="content-container">
  <h2>Summary Table: Java Installation on OS</h2>

  <div class="table-container">
<table class="styled-table" style="width: 100%; border-collapse: collapse; margin-top: 1rem; font-size: 1rem;">
  <thead>
    <tr style="background-color: #e3f2fd;">
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">OS</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">File Type</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Steps</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Set PATH</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">Windows</td>
      <td style="padding: 8px; border: 1px solid #ddd;">.exe</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Run installer, set in System Env</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Yes</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">Linux</td>
      <td style="padding: 8px; border: 1px solid #ddd;">.tar.gz</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Extract &amp; edit <code>.bashrc</code></td>
      <td style="padding: 8px; border: 1px solid #ddd;">Yes</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">macOS</td>
      <td style="padding: 8px; border: 1px solid #ddd;">.dmg</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Run installer &amp; edit <code>.zshrc</code></td>
      <td style="padding: 8px; border: 1px solid #ddd;">Optional</td>
    </tr>
  </tbody>
</table>

</div>

  <h2>Java Hello World Program</h2>
  <p>This is a basic program that prints a message to the console:</p>

  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">// Your First Program  
class HelloWorld {  
  public static void main(String[] args) {  
    System.out.println("Hello, World!");  
  }  
}</pre>
  </div>

  <div class="output-box">Output: Hello, World!</div>

  <ul class="bullet-list">
    <li><code>class HelloWorld</code>: Declares the class.</li>
    <li><code>public static void main</code>: Entry point of the program.</li>
    <li><code>System.out.println</code>: Prints the output.</li>
  </ul>

  <h2>Basic Structure of a Java Program</h2>
  <p>This is the standard structure used when writing Java programs:</p>

  <div class="code-container">
    <pre class="code-block">public class HelloWorld {  
  public static void main(String[] args) {  
    // code goes here  
  }  
}</pre>
  </div>

  <h2>How Java Works</h2>
  <p>
    Java programs are compiled into bytecode, which runs on the Java Virtual Machine (JVM). This design enables Java to be platform-independent.
  </p>

  <h3>Execution Flow</h3>
  <ol class="bullet-list">
    <li>Write code in a <code>.java</code> file.</li>
    <li>Compile the file to <code>.class</code> bytecode using <code>javac</code>.</li>
    <li>Run the bytecode using the <code>java</code> command.</li>
  </ol>

  <h3>Key Components</h3>
  <ul class="bullet-list">
    <li><strong>JDK:</strong> Java Development Kit (includes compiler and tools)</li>
    <li><strong>JRE:</strong> Java Runtime Environment (includes JVM and libraries)</li>
    <li><strong>JVM:</strong> Executes Java bytecode on your machine</li>
  </ul>

  <p>This setup allows developers to <strong>"write once, run anywhere"</strong>.</p>
</div>

    `
  },
    controlflow: {
    id: "controlflow",
    title: "control flow in Java",
    description: `
      <div class="content-container">
    <h1>Control Flow Statements in Java</h1>

    <p>
      In this part of the Java tutorial, we will talk about program flow control. We will use several keywords 
      that enable us to control the flow of a Java program.
    </p>

    <p>
      Generally, the statements inside your Java code are executed from <strong>top to bottom</strong>, in the order that they appear.
      <strong>Control flow statements</strong> change or break the flow of execution by implementing decision making, looping, and branching.
    </p>

    <p>
      These allow specific blocks of code to execute based on conditions. Statements can be executed <strong>multiple times</strong> or only under a <strong>specific condition</strong>.
    </p>

    <ul class="bullet-list">
      <li><code>if</code>, <code>else</code>, and <code>switch</code> statements are used for <strong>decision making</strong>.</li>
      <li><code>while</code> and <code>for</code> statements are used to create <strong>loops</strong>.</li>
      <li><code>break</code> and <code>continue</code> statements are used to <strong>alter loop execution</strong>.</li>
    </ul>

    <h2>Types of Control Flow Statements</h2>
    <div class="styled-box">
      <ul>
        <li><strong>Decision-making statements:</strong> <code>if-then</code>, <code>if-then-else</code>, <code>switch</code></li>
        <li><strong>Looping statements:</strong> <code>for</code>, <code>while</code>, <code>do-while</code></li>
        <li><strong>Branching statements:</strong> <code>break</code>, <code>continue</code>, <code>return</code></li>
      </ul>
    </div>
  </div>
  <div class="content-container">
  <h1>Decision-Making Statements in Java</h1>

  <p>
    In real-life situations, we often make choices based on certain conditions — programming is no different.
    Java provides decision-making statements that allow a program to choose which block of code to run depending
    on whether a condition is true or false.
  </p>

  <p>
    These decisions help manage the flow of execution and prevent unnecessary repetition or computation when conditions don’t apply.
  </p>

  <h2>Types of Decision-Making Statements</h2>

  <div class="styled-box">
    <ul>
      <li><strong><code>if</code> Statement:</strong> Executes a block only when a specified condition is true.</li>
      <li><strong><code>if-else</code> Statement:</strong> Executes one block if the condition is true, otherwise runs the alternative block.</li>
      <li><strong><code>if-else-if</code> Ladder:</strong> Used to test multiple conditions in sequence, executing the block for the first true condition.</li>
      <li><strong><code>switch</code> Statement:</strong> Selects and runs a block of code from many options based on the value of a variable.</li>
    </ul>
  </div>
</div>
<div class="content-container">
  <h1>The <code>if</code> Statement in Java</h1>

  <p>
    The <code>if</code> statement is used to control whether a block of code should run based on a condition. 
    If the given condition evaluates to <code>true</code>, the code inside the <code>if</code> block is executed.
    If the condition is false, the block is skipped.
  </p>

  <h2>Syntax</h2>
  <pre class="code-block">
if (condition) {
    // code to execute if condition is true
}
  </pre>

  <h2>Flowchart</h2>
  <img src="https://dotnettutorials.net/wp-content/uploads/2020/08/If-Statement-Control-Flow-in-Java.png" 
       alt="Flowchart of if Statement in Java"
       class="flow-img">

  <h2>Sample Program</h2>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">
public class IfStatementDemo {
    public static void main(String[] args) {
        boolean condition = true;

        if (condition) {
            System.out.println("Condition is true");
        }
    }
}
    </pre>
  </div>

  <h2>Output</h2>
  <div class="output-box" >Condition is true</div>
</div>

<!-- if else -->
<div class="content-container">
  <h1>The <code>if-else</code> Statement in Java</h1>

  <p>
    The <code>else</code> keyword allows your program to execute one block of code when a condition is <code>true</code>, 
    and another block when the condition is <code>false</code>. This creates a simple two-way decision path.
  </p>

  <h2>Syntax</h2>
  <pre class="code-block">
if (condition) {
    statement-1;
} else {
    statement-2;
}
  </pre>

  <h2>Flowchart</h2>
  <img src="/images/ifelse.png" 
       alt="Flowchart of if-else Statement in Java"
       class="flow-img">

  <h2>Sample Program</h2>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">
public class IfElseStatementDemo {
    public static void main(String[] args) {
        boolean condition = false;

        if (condition) {
            System.out.println("Condition is true");
        } else {
            System.out.println("Condition is false");
        }
    }
}
    </pre>
  </div>

  <h2>Output</h2>
  <div class="output-box">Condition is false</div>
</div>
<!-- nested -->
 <div class="content-container">
  <h1>The <code>if-else-if</code> Statement in Java</h1>

  <p>
    The <code>else if</code> keyword lets you check multiple conditions sequentially.
    If the first <code>if</code> condition is false, Java tests the <code>else if</code> condition(s) one by one.
    When a condition evaluates to true, its block executes, and the rest are skipped.
  </p>

  <h2>Syntax</h2>
  <pre class="code-block">
if (condition1) {
    statement-1;
} else if (condition2) {
    statement-2;
} else {
    statement-3;
}
  </pre>

  <h2>Flowchart</h2>
  <img src="/images/ifelseif.png" 
       alt="Flowchart of if-else-if Statement in Java"
       class="flow-img">

  <h2>Sample Program</h2>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">
public class IfElseIfStatementDemo {
    public static void main(String[] args) {
        int i = 10;

        if (i > 10) {
            System.out.println("Condition is greater than 10");
        } else if (i < 10) {
            System.out.println("Condition is less than 10");
        } else {
            System.out.println("Condition is equal to 10");
        }
    }
}
    </pre>
  </div>

  <h2>Output</h2>
  <div class="output-box">Condition is equal to 10</div>
</div>
<!-- switch -->
<div class="content-container">
  <h1>The <code>switch</code> Statement in Java</h1>

  <p>
    The <code>switch</code> statement is useful when you want to test a variable against multiple possible values.
    It’s a cleaner alternative to multiple <code>if-else-if</code> statements, especially when the conditions check the same variable.
  </p>

  <h2>Syntax</h2>
  <pre class="code-block">
switch(expression) {
  case value1:
    statement-1;
    break;

  case value2:
    statement-2;
    break;

  // more cases...

  case valueN:
    statement-N;
    break;

  default:
    // statements executed if none of the cases match
}
  </pre>

  <h2>Flowchart</h2>
  <img src="/images/switch.png"
       alt="Flowchart of switch Statement in Java"
       class="flow-img">

  <h2>Sample Program</h2>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">
class SwitchCaseDemo {
    public static void main(String args[]) {
        int age = 2;
        switch (age) {
            case 1:
                System.out.println("You are one year old.");
                break;
            case 2:
                System.out.println("You are two years old.");
                break;
            default:
                System.out.println("You are more than two years old.");
        }
    }
}
   </pre>
  </div>

  <h2>Output</h2>
  <div class="output-box">You are two years old.</div>
</div>
<!-- references -->
 <div class="references-container">
  <h3>References & Further Reading</h3>
  <ul class="references-list">
    <li><a href="https://docs.oracle.com/javase/tutorial/java/nutsandbolts/flow.html" target="_blank" rel="noopener noreferrer">Java Official Tutorial: Control Flow Statements</a></li>
    <li><a href="https://www.geeksforgeeks.org/switch-statement-in-java/" target="_blank" rel="noopener noreferrer">GeeksforGeeks: Switch Statement in Java</a></li>
    <li><a href="https://www.javatpoint.com/java-switch-case" target="_blank" rel="noopener noreferrer">JavaTpoint: Java Switch Case</a></li>
    <li><a href="https://dotnettutorials.net/lesson/control-flow-statements-in-java/" target="_blank" rel="noopener noreferrer">DotNetTutorials: Switch Statement Flow Chart & Example</a></li>
  </ul>
</div>
    `
  },
  operators: {
    id: "operators",
    title: "",
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
  <ul class="styled-list">
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

  <ul  class="styled-list">
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
    title: "loops in Java",
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
  <ul  class="styled-list">
    <li><strong><code>for</code> loop</strong>: Used when the number of iterations is known.</li>
    <li><strong><code>while</code> loop</strong>: Used when the number of iterations is not known and the condition is checked before the loop runs.</li>
    <li><strong><code>do-while</code> loop</strong>: Similar to <code>while</code>, but the condition is checked after the loop executes at least once.</li>
  </ul>

 
</div>
<!-- for loop -->
 <div class="content-container">
  <h1>For Loop in Java</h1>

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

  <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>
</div>

<!-- enhanced for loop -->
 <div class="content-container">
  <h1>Enhanced for Loop in Java</h1>

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

   <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>
</div>
<!-- while loop -->
 <div class="content-container">
  <h1>While Loop in Java</h1>

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
    <img src="/images/whileloop.png" alt="While Loop Flowchart in Java">
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
   <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>
</div>

<!-- do while -->

<div class="content-container">
  <h1>Do-while Loop in Java</h1>

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
   <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
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
  },

    typecasting: {
    id: "typecasting",
    title: "",
    description: `
     <div class="content-container">
    <h1>Java Type Casting</h1>
    <p>Before you learn about Java Type Casting, make sure you know about Java Data Types.</p>

    <h2>Type Casting</h2>
    <p>The process of converting the value of one data type (int, float, double, etc.) to another data type is known as <strong>typecasting</strong>.</p>
    <p>In Java, there are 13 types of type conversion. However, in this tutorial, we will only focus on the major 2 types:</p>

    <ul class="bullet-list">
      <li>Widening Type Casting</li>
      <li>Narrowing Type Casting</li>
    </ul>

    <h1>Widening Type Casting</h1>
    <p>In Widening Type Casting, Java automatically converts one data type to another data type.</p>
    <p><strong>Example: Converting int to double</strong></p>

    <div class="code-container">
      <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
      <pre class="code-block">class Main {
  public static void main(String[] args) {
    int num = 10;
    System.out.println("The integer value: " + num);

    double data = num;
    System.out.println("The double value: " + data);
  }
}</pre>
    </div>

    <div class="output-box">
      <strong>Output</strong>
      <ol class="styled-box-output">
        <li>The integer value: 10</li>
        <li>The double value: 10.0</li>
      </ol>
    </div>

    <div class="styled-box">
      In Widening Type Casting, smaller data types are converted into larger types automatically. Hence, no data is lost. This is also known as <strong>Implicit Type Casting</strong>.
    </div>

    <h1>Narrowing Type Casting</h1>
    <p>In Narrowing Type Casting, we manually convert one data type into another using parentheses.</p>
    <p><strong>Example: Converting double into int</strong></p>

    <div class="code-container">
      <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
      <pre class="code-block">class Main {
  public static void main(String[] args) {
    double num = 10.99;
    System.out.println("The double value: " + num);

    int data = (int) num;
    System.out.println("The integer value: " + data);
  }
}</pre>
    </div>

    <div class="output-box">
      <strong>Output</strong>
      <ol class="styled-box-output">
        <li>The double value: 10.99</li>
        <li>The integer value: 10</li>
      </ol>
    </div>

    <div class="styled-box">
      In Narrowing Type Casting, larger data types are manually converted into smaller types. This can result in data loss. It is also known as <strong>Explicit Type Casting</strong>.
    </div>

    <h1>Other Type Conversion Examples</h1>

    <p><strong>Example 1: Type conversion from int to String</strong></p>
    <div class="code-container">
      <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
      <pre class="code-block">class Main {
  public static void main(String[] args) {
    int num = 10;
    System.out.println("The integer value is: " + num);

    String data = String.valueOf(num);
    System.out.println("The string value is: " + data);
  }
}</pre>
    </div>

    <div class="output-box">
      <strong>Output</strong>
      <ol class="styled-box-output">
        <li>The integer value is: 10</li>
        <li>The string value is: 10</li>
      </ol>
    </div>

    <p><strong>Example 2: Type conversion from String to int</strong></p>
    <div class="code-container">
      <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
      <pre class="code-block">class Main {
  public static void main(String[] args) {
    String data = "10";
    System.out.println("The string value is: " + data);

    int num = Integer.parseInt(data);
    System.out.println("The integer value is: " + num);
  }
}</pre>
    </div>

    <div class="output-box">
      <strong>Output</strong>
      <ol class="styled-box-output">
        <li>The string value is: 10</li>
        <li>The integer value is: 10</li>
      </ol>
    </div>

    <div class="styled-box">
      <strong>Note:</strong> If the string variable cannot be converted into an integer, a <code>NumberFormatException</code> occurs.
    </div>
</div>
    `
  },
   
  arrays: {
    id: "arrays",
    title: "",
    description: `
      <div class="content-container">
  <h1>Java Arrays</h1>

  <p>An array is a collection of similar types of data.</p>

  <p>If you want to store the names of 100 people, you can create an array of the String type:</p>

  <div class="code-container">
    
    <pre class="code-block">String[] array = new String[100];</pre>
  </div>

  <p>This array cannot store more than 100 names. The number of values in a Java array is always fixed.</p>

  <h2>How to Declare an Array in Java?</h2>
  <p>In Java, you declare an array like this:</p>

  <div class="code-container">
    <pre class="code-block">dataType[] arrayName;</pre>
  </div>

  <p><strong>dataType</strong> can be primitive types like <code>int</code>, <code>char</code>, <code>double</code>, or Java objects.</p>
  <p><strong>arrayName</strong> is the identifier.</p>

  <p>Example:</p>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">double[] data;</pre>
  </div>

  <p>Here, <code>data</code> is an array that can hold values of type <code>double</code>.</p>

  <h3>Allocating Memory</h3>
  <p>To specify the number of elements, allocate memory:</p>

  <div class="code-container">
    <pre class="code-block">// declare an array
double[] data;

// allocate memory
data = new double[10];</pre>
  </div>

  <p>Now, the array can store 10 elements.</p>
  <p>You can also declare and allocate memory in a single statement:</p>

  <div class="code-container">
    <pre class="code-block">double[] data = new double[10];</pre>
  </div>

  <h2>How to Initialize Arrays in Java?</h2>
  <p>Arrays can be initialized during declaration:</p>

  <div class="code-container">
    <pre class="code-block">int[] age = {12, 4, 5, 2, 5};</pre>
  </div>

  <p>Java compiler automatically sets the size to 5 here.</p>

  <p>Or initialize using indices:</p>

  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">// declare an array
int[] age = new int[5];

// initialize array
age[0] = 12;
age[1] = 4;
age[2] = 5;
// ...</pre>
  </div>

  <p><strong>Note:</strong> Array indices start at 0. For an array of size <code>n</code>, the last index is <code>n-1</code>.</p>

  <h2>How to Access Elements of an Array in Java?</h2>
  <p>Access elements using the index:</p>

  <div class="code-container">
    <pre class="code-block">array[index]</pre>
  </div>

  <h3>Example: Access Array Elements</h3>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">class Main {
  public static void main(String[] args) {
    int[] age = {12, 4, 5, 2, 5};

    System.out.println("Accessing Elements of Array:");
    System.out.println("First Element: " + age[0]);
    System.out.println("Second Element: " + age[1]);
    System.out.println("Third Element: " + age[2]);
    System.out.println("Fourth Element: " + age[3]);
    System.out.println("Fifth Element: " + age[4]);
  }
}</pre>
  </div>
   <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>

  <h2>Looping Through Array Elements</h2>
  <p>Using <code>for</code> loop:</p>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">class Main {
  public static void main(String[] args) {
    int[] age = {12, 4, 5};

    System.out.println("Using for Loop:");
    for(int i = 0; i < age.length; i++) {
      System.out.println(age[i]);
    }
  }
}</pre>
  </div>
 <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>
  <p>Using <code>for-each</code> loop:</p>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">class Main {
  public static void main(String[] args) {
    int[] age = {12, 4, 5};

    System.out.println("Using for-each Loop:");
    for(int a : age) {
      System.out.println(a);
    }
  }
}</pre>
  </div>
   <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>

  <h2>Example: Compute Sum and Average of Array Elements</h2>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">class Main {
  public static void main(String[] args) {
    int[] numbers = {2, -9, 0, 5, 12, -25, 22, 9, 8, 12};
    int sum = 0;
    double average;

    for (int number : numbers) {
      sum += number;
    }

    int arrayLength = numbers.length;

    average = (double) sum / arrayLength;

    System.out.println("Sum = " + sum);
    System.out.println("Average = " + average);
  }
}</pre>
  </div>
  


  <p>Note how we used the <code>length</code> property and type casting for average calculation.</p>
   <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>
</div>

<!--multi dimensional arrays-->

<div class="content-container">
  <h1>Java Multidimensional Arrays</h1>
  <p>Before we learn about the multidimensional array, make sure you know about Java arrays.</p>

  <h2>What is a Multidimensional Array?</h2>
  <p>A multidimensional array is an array of arrays. Each element of a multidimensional array is an array itself.</p>
  <p>For example:</p>

  <div class="code-container">
    <pre class="code-block">int[][] a = new int[3][4];</pre>
  </div>

  <p>Here, <code>a</code> is a 2-dimensional array that can hold a maximum of 12 elements (3 rows × 4 columns).</p>

  <h3>2-dimensional Array in Java</h3>
  <img src="https://www.programiz.com/sites/tutorial2program/files/java-2d-array.jpg" alt="2-dimensional array diagram" style="width:100%; max-width:600px;margin-bottom:1rem;"/>
  <p>Remember, Java uses zero-based indexing, so the index starts at 0, not 1.</p>

  <h2>Example of a 3-dimensional Array</h2>
  <p>You can create a 3-dimensional array as well:</p>

  <div class="code-container">
    <pre class="code-block">String[][][] data = new String[3][4][2];</pre>
  </div>

  <p>Here, <code>data</code> is a 3D array that can hold up to 24 (3 × 4 × 2) elements of type <code>String</code>.</p>

  <h2>How to Initialize a 2D Array in Java?</h2>
  <p>Here is an example of initializing a 2-dimensional array:</p>

  <div class="code-container">
    <pre class="code-block">int[][] a = {
  {1, 2, 3}, 
  {4, 5, 6, 9}, 
  {7},
};</pre>
  </div>

  <p>Each element of the multidimensional array is an array itself. Also, unlike C/C++, each row in Java can have different lengths.</p>

  <img src="https://www.programiz.com/sites/tutorial2program/files/2d-array-variable-length.jpg" alt="2D array with variable length rows" style="width:100%; max-width:600px;"/>

  <h2>Example: Length of Each Row in 2D Array</h2>

  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">class MultidimensionalArray {
  public static void main(String[] args) {
    int[][] a = {
      {1, 2, 3}, 
      {4, 5, 6, 9}, 
      {7}, 
    };
    System.out.println("Length of row 1: " + a[0].length);
    System.out.println("Length of row 2: " + a[1].length);
    System.out.println("Length of row 3: " + a[2].length);
  }
}</pre>
  </div>

  <div class="output-box">
    <strong>Output</strong><br/>
    <ul class="style-output-other">
       <li> Length of row 1: 3</li>
       <li> Length of row 2: 4</li>
       <li> Length of row 3: 1</li>
    </ul>
  </div>

  <p>Here, <code>a[0]</code>, <code>a[1]</code>, and <code>a[2]</code> are arrays themselves, and the <code>length</code> property gives their size.</p>
 <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>
  <h2>Example: Print All Elements of 2D Array Using Loop</h2>

  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">class MultidimensionalArray {
  public static void main(String[] args) {
    int[][] a = {
      {1, -2, 3}, 
      {-4, -5, 6, 9}, 
      {7}, 
    };
    for (int i = 0; i < a.length; ++i) {
      for (int j = 0; j < a[i].length; ++j) {
        System.out.println(a[i][j]);
      }
    }
  }
}</pre>
  </div>

  <div class="output-box">
    <strong>Output</strong><br/>
    <ul class="style-output-other">
     <li>1</li>
     <li>-2</li>
     <li>3</li>
     <li>-4</li>
     <li>-5</li>
     <li>6</li>
     <li>9</li>
     <li>7</li>
    </ul>
    
  </div>
<div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>

  <h2>Example: Using for...each Loop to Access 2D Array Elements</h2>

  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">class MultidimensionalArray {
  public static void main(String[] args) {
    int[][] a = {
      {1, -2, 3}, 
      {-4, -5, 6, 9}, 
      {7}, 
    };
    for (int[] innerArray : a) {
      for (int data : innerArray) {
        System.out.println(data);
      }
    }
  }
}</pre>
  </div>

  <div class="output-box">
    <strong>Output</strong><br/>
     <ul class="style-output-other">
     <li>1</li>
     <li>-2</li>
     <li>3</li>
     <li>-4</li>
     <li>-5</li>
     <li>6</li>
     <li>9</li>
     <li>7</li>
    </ul>
  </div>

  <p>We first access each row (which is an array) and then iterate through the elements of that row.</p>
<div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>

  <h2>How to Initialize a 3D Array in Java?</h2>
  <p>3D arrays are arrays of 2D arrays. You can initialize a 3D array similar to 2D arrays:</p>

  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">// test is a 3d array
int[][][] test = {
  {
    {1, -2, 3}, 
    {2, 3, 4}
  }, 
  { 
    {-4, -5, 6, 9}, 
    {1}, 
    {2, 3}
  } 
};</pre>
  </div>

  <p>Rows of a 3D array can also have variable lengths, like 2D arrays.</p>

  <h2>Example: 3-dimensional Array</h2>

  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">class ThreeArray {
  public static void main(String[] args) {
    int[][][] test = {
      {
        {1, -2, 3}, 
        {2, 3, 4}
      }, 
      { 
        {-4, -5, 6, 9}, 
        {1}, 
        {2, 3}
      } 
    };

    for (int[][] array2D : test) {
      for (int[] array1D : array2D) {
        for (int item : array1D) {
          System.out.println(item);
        }
      }
    }
  }
}</pre>
  </div>

  <div class="output-box">
    <strong>Output</strong><br/>
    1<br/>
    -2<br/>
    3<br/>
    2<br/>
    3<br/>
    4<br/>
    -4<br/>
    -5<br/>
    6<br/>
    9<br/>
    1<br/>
    2<br/>
    3
  </div>

  <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>

</div>
    `
  },
  
  methods: {
    id: "methods",
    title: "",
    description: `
     <div class="content-container">
  <h1>Java Methods</h1>
 

  <h2>What is a Method in Java?</h2>
  <p>A method in Java is a block of code that performs a specific task. It allows code reusability, improves organization, and is always defined inside a class. Methods define the behavior of objects and are similar to functions in other programming languages.</p>

  <h2>Example: Creating and Using a Method</h2>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">public class Booster {
    // Method to print a message
    public void printMessage() {
        System.out.println("Hello, Booster!");
    }

    public static void main(String[] args) {
        Geeks obj = new Geeks();  // Create an object
        obj.printMessage();       // Call the method
    }
}</pre>
  </div>
  <div class="output-box">
    <strong>Output</strong><br/>
    <ul class="style-output-other">
     <li>Hello, Booster!</li>
    </ul>
  </div>

  <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>


  <h2>Syntax of a Method</h2>
  <div class="code-container">
    <pre class="code-block">&lt;access_modifier&gt; &lt;return_type&gt; &lt;method_name&gt;(parameters) {
    // method body
}</pre>
  </div>
  <ul class="styled-box-output">
    <li><strong>Access Modifier:</strong> Defines visibility (public, private, protected, or default).</li>
    <li><strong>Return Type:</strong> Type of value returned (void if nothing is returned).</li>
    <li><strong>Method Name:</strong> Follows camelCase; should be a verb.</li>
    <li><strong>Parameters:</strong> Optional input values.</li>
    <li><strong>Exception List:</strong> Optional declared exceptions.</li>
    <li><strong>Method Body:</strong> Contains the logic.</li>
  </ul>

  <h2>Types of Methods in Java</h2>
  <h3>1. Predefined Methods</h3>
  <div class="code-container">
    <pre class="code-block">Math.random();  // Returns a random value
Math.PI;        // Returns value of pi</pre>
  </div>

  <h3>2. User-defined Methods</h3>
  <div class="code-container">
    <pre class="code-block">public void sayHello() { ... }
public int add(int a, int b) { ... }</pre>
  </div>

  <h2>Ways to Define Methods</h2>
  <h3>Instance Method</h3>
  <div class="code-container">
    <pre class="code-block">void show() {
    // instance method body
}</pre>
  </div>

  <h3>Static Method</h3>
  <div class="code-container">
    <pre class="code-block">static void display() {
    // static method body
}</pre>
  </div>

  <h2>Method Signature</h2>
  <p>A method signature includes the method name and parameter list (number, type, and order). Return type and exceptions are not part of the signature.</p>
  <div class="code-container">
    <pre class="code-block">max(int x, int y)</pre>
  </div>

  <h2>Naming a Method</h2>
  <ul class="styled-box-output">
    <li>Start with a lowercase verb (e.g., getName, printData)</li>
    <li>Use camelCase for multiple words</li>
    <li>Be descriptive and concise</li>
    <li>Method overloading (same name, different parameters) is allowed</li>
  </ul>

  <h2>Example: Calling a Method Using Object</h2>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">class Add {
    public int addTwoInt(int a, int b) {
        return a + b;
    }
}

public class Booster {
    public static void main(String[] args) {
        Add obj = new Add();
        int result = obj.addTwoInt(1, 2);
        System.out.println("Sum: " + result);
    }
}</pre>
  </div>
  <div class="output-box">
    <strong>Output</strong><br/>
    <ul class="style-output-other">
     <li>Sum: 3</li>
    </ul>
    
  </div>
 <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>
  <h2>Example: Calling Methods Inside Class</h2>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">class Test {
    public static int count = 0;

    Test() {
        count++;
    }

    public static int getCount() {
        return count;
    }

    public int method1() {
        System.out.println("Inside method1");
        this.method2();
        return 1;
    }

    public void method2() {
        System.out.println("Inside method2");
    }
}

public class Booster{
    public static void main(String[] args) {
        Test obj = new Test();
        int i = obj.method1();
        System.out.println("Returned: " + i);
        System.out.println("Objects created: " + Test.getCount());
    }
}</pre>
  </div>
  <div class="output-box">
    <strong>Output</strong><br/>
    
    <ul class="style-output-other">
     <li> Inside method1</li>
      <li>Inside method2</li>
       <li>Returned: 1</li>
        <li>Objects created: 1</li>
    </ul>
    
  </div>
 <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>
  <h1>Passing Parameters to Methods</h1>
  <h3>Array as Argument</h3>
  <div class="code-container">
    <pre class="code-block">public void printArray(int[] arr) {
    for(int i : arr) System.out.println(i);
}</pre>
  </div>

  <h3>Variable Arguments (Varargs)</h3>
  <div class="code-container">
    <pre class="code-block">public void printNumbers(int... nums) {
    for(int n : nums) System.out.println(n);
}</pre>
  </div>

  <h2>Accessor and Mutator Methods (Getters & Setters)</h2>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">public class Geeks {
    private int num;
    private String name;

    // Getter methods
    public int getNum() { return num; }
    public String getName() { return name; }

    // Setter methods
    public void setNum(int num) { this.num = num; }
    public void setName(String name) { this.name = name; }

    public void printDetails() {
        System.out.println("Number: " + num);
        System.out.println("Name: " + name);
    }

    public static void main(String[] args) {
        Geeks g = new Geeks();
        g.setNum(123);
        g.setName("GFG Write");
        g.printDetails();
    }
}</pre>
  </div>
  <div class="output-box">
    <strong>Output</strong><br/>
    <ul class="style-output-other">
     <li>Number: 123</li>
     <li>Name: GFG Write</li>
    </ul> 
  </div>

  <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>



  <h2>Memory Allocation of Method Calls</h2>
  <ul class="styled-box-output">
    <li>Java uses stack memory for method calls.</li>
    <li>When a method is called, a stack frame is created.</li>
    <li>Once execution completes, the frame is removed.</li>
    <li>A stack pointer tracks method execution order (LIFO).</li>
  </ul>

  <h2>Advantages of Using Methods</h2>
  <ul class="styled-box-output">
    <li> <strong>Code Reusability</strong> – Define once, use many times.</li>
    <li><strong>Abstraction</strong> – Hide complex logic behind a simple interface.</li>
    <li><strong>Encapsulation</strong> – Group logic with related data.</li>
    <li><strong>Modularity</strong> – Organize code into logical blocks.</li>
    <li><strong>Maintainability</strong> – Easier to update and debug.</li>
    <li><strong>Customization</strong> – Build reusable yet flexible code blocks.</li>
  </ul>
</div>
    `
  },
    thiskeyward: {
    id: "thiskeyward",
    title: "",
    description: `
       <div class="content-container">
  <h1>What is the <code>this</code> keyword in Java?</h1>

  <p>In Java, <code>this</code> keyword is used to refer to the current object inside a method or a constructor. For example:</p>

  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">class Main {
    int instVar;

    Main(int instVar){
        this.instVar = instVar;
        System.out.println("this reference = " + this);
    }

    public static void main(String[] args) {
        Main obj = new Main(8);
        System.out.println("object reference = " + obj);
    }
}</pre>
  </div>

  <div class="output-box">
    <strong>Output:</strong><br>
    <ul class="style-output-other">
     <li>this reference = Main@23fc625e</li>
     <li>object reference = Main@23fc625e</li>
</ul>
  </div>
 <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>
  <p>In the above example, we created an object named <code>obj</code> of the class <code>Main</code>. We then print the reference to the object <code>obj</code> and <code>this</code> keyword of the class.</p>

  <p>Here, we can see that the reference of both <code>obj</code> and <code>this</code> is the same. It means <code>this</code> is nothing but the reference to the current object.</p>
</div>
<!-- part 2 -->
 <div class="content-container">
  <h1>Use of <code>this</code> Keyword</h1>

  <p>There are various situations where <code>this</code> keyword is commonly used.</p>

  <h2>1. Using <code>this</code> for Ambiguity Variable Names</h2>
  
  <p>In Java, it is not allowed to declare two or more variables having the same name inside a scope (class scope or method scope). However, instance variables and parameters may have the same name. For example,</p>
  
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">class MyClass {
    // instance variable
    int age;

    // parameter
    MyClass(int age){
        age = age;
    }
}</pre>
  </div>
  
  <p>In the above program, the instance variable and the parameter have the same name: <code>age</code>. Here, the Java compiler is confused due to name ambiguity.</p>

  <p>In such a situation, we use <code>this</code> keyword. For example,</p>

  <p>First, let's see an example <strong>without using this keyword</strong>:</p>

  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">class Main {
    int age;
    Main(int age){
        age = age;
    }

    public static void main(String[] args) {
        Main obj = new Main(8);
        System.out.println("obj.age = " + obj.age);
    }
}</pre>
  </div>

  <div class="output-box">
    <strong>Output:</strong><br>
    <ul class="style-output-other">
     <li>obj.age = 0</li>
</ul>
    
  </div>

   <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>

  <p>In the above example, we have passed 8 as a value to the constructor. However, we are getting 0 as an output. This is because the Java compiler gets confused due to ambiguity between the instance variable and the parameter.</p>

  <p>Now, let's rewrite the above code <strong>using the <code>this</code> keyword</strong>:</p>

  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">class Main {
    int age;
    Main(int age){
        this.age = age;
    }

    public static void main(String[] args) {
        Main obj = new Main(8);
        System.out.println("obj.age = " + obj.age);
    }
}</pre>
  </div>

  <div class="output-box">
    <strong>Output:</strong><br>
    <ul class="style-output-other">
     <li>obj.age = 0</li>
</ul>
  </div>
 <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>
  <p>Now, we are getting the expected output. It is because when the constructor is called, <code>this</code> inside the constructor is replaced by the object <code>obj</code> that has called the constructor. Hence the <code>age</code> variable is assigned value 8.</p>

  <p>Also, if the name of the parameter and instance variable is different, the compiler automatically appends <code>this</code> keyword. For example, the code:</p>

  <div class="code-container">
    <pre class="code-block">class Main {
    int age;

    Main(int i) {
        age = i;
    }
}</pre>
  </div>

  <p>is equivalent to:</p>

  <div class="code-container">
    <pre class="code-block">class Main {
    int age;

    Main(int i) {
        this.age = i;
    }
}</pre>
  </div>

</div>
<!-- part 3 -->
 <div class="content-container">
  <h1>2. <code>this</code> with Getters and Setters</h1>

  <p>Another common use of <code>this</code> keyword is in setters and getters methods of a class. For example:</p>

  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">class Main {
   String name;

   // setter method
   void setName( String name ) {
       this.name = name;
   }

   // getter method
   String getName(){
       return this.name;
   }

   public static void main( String[] args ) {
       Main obj = new Main();

       // calling the setter and the getter method
       obj.setName("Toshiba");
       System.out.println("obj.name: "+obj.getName());
   }
}</pre>
  </div>

  <div class="output-box">
    <strong>Output:</strong><br>
    <ul class="style-output-other">
     <li>obj.name: Toshiba</li>
   </ul>
    
  </div>
 <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>
  <p>Here, we have used <code>this</code> keyword:</p>

  <ul class="bullet-list">
    <li>To assign a value inside the setter method (<code>this.name = name</code>)</li>
    <li>To access the value inside the getter method (<code>return this.name</code>)</li>
  </ul>
</div>
<!-- part 4 -->
 <div class="content-container">
  <h1>3. Using <code>this</code> in Constructor Overloading</h1>

  <p>While working with constructor overloading, we might need to invoke one constructor from another constructor. In such a case, we use the <code>this()</code> keyword. Let's take an example:</p>

  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">class Complex {

    private int a, b;

    // constructor with 2 parameters
    private Complex( int i, int j ){
        this.a = i;
        this.b = j;
    }

    // constructor with single parameter
    private Complex(int i){
        // invokes the constructor with 2 parameters
        this(i, i); 
    }

    // constructor with no parameter
    private Complex(){
        // invokes the constructor with single parameter
        this(0);
    }

    @Override
    public String toString(){
        return this.a + " + " + this.b + "i";
    }

    public static void main( String[] args ) {
  
        // creating object of Complex class
        // calls the constructor with 2 parameters
        Complex c1 = new Complex(2, 3); 
    
        // calls the constructor with a single parameter
        Complex c2 = new Complex(3);

        // calls the constructor with no parameters
        Complex c3 = new Complex();

        // print objects
        System.out.println(c1);
        System.out.println(c2);
        System.out.println(c3);
    }
}</pre>
  </div>

  <div class="output-box">
    <strong>Output:</strong><br>
    <ul class="style-output-other">
     <li> 2 + 3i</li>
     <li>3 + 3i</li>
     <li>0 + 0i</li>
</ul>
  
  </div>

   <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>

  <p>In the above example, we used <code>this()</code> to:</p>
  <ul class="bullet-list">
    <li>Call the constructor <code>Complex(int i, int j)</code> from the constructor <code>Complex(int i)</code></li>
    <li>Call the constructor <code>Complex(int i)</code> from the constructor <code>Complex()</code></li>
  </ul>

  <p>Notice the line:</p>
  <code>System.out.println(c1);</code>

  <p>When we print the object <code>c1</code>, Java internally calls the <code>toString()</code> method. Since we've overridden it, we get customized output.</p>

  <div class="styled-box">
    <strong>Note:</strong> One of the big advantages of <code>this()</code> is to reduce duplicate code, but be cautious—constructor chaining adds overhead and may impact performance if overused.
  </div>
</div>
<!-- part 5 -->
 <div class="content-container">
  <h1>Java <code>final</code> Keyword</h1>

  <p>In Java, the <code>final</code> keyword is used to denote constants. It can be used with variables, methods, and classes.</p>

  <p>Once an entity (variable, method, or class) is declared <code>final</code>, it can be assigned or used only once. Specifically:</p>

  <ul class="bullet-list">
    <li>A <strong>final variable</strong> cannot be reinitialized with another value.</li>
    <li>A <strong>final method</strong> cannot be overridden.</li>
    <li>A <strong>final class</strong> cannot be extended (inherited).</li>
  </ul>

  <div class="styled-box">
    <strong>Note:</strong> Using <code>final</code> improves code safety and can also offer performance benefits, especially when used with constants and utility methods.
  </div>
</div>
<!-- part 6 -->
 <div class="content-container">
  <h2>1. Java <code>final</code> Variable</h2>

  <p>In Java, we cannot change the value of a <code>final</code> variable once it is assigned. Attempting to do so results in a compilation error.</p>

  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">class Main {
  public static void main(String[] args) {

    // create a final variable
    final int AGE = 32;

    // try to change the final variable
    AGE = 45;
    System.out.println("Age: " + AGE);
  }
}</pre>
  </div>

  <div class="output-box">
    <strong>Compilation Error:</strong><br>
    <ul class="style-output-other">
     <li>cannot assign a value to final variable AGE</li>
     <li>&nbsp;&nbsp;&nbsp;&nbsp;AGE = 45;</li>
     <li&nbsp;&nbsp;&nbsp;&nbsp;^</li>
</ul>
 
  </div>
 <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>
  <div class="styled-box">
    <strong>Note:</strong> It is recommended to use uppercase letters when declaring <code>final</code> variables in Java to denote that their values are constants.
  </div>
</div>
<!-- part 7 -->
 <div class="content-container">
  <h2>2. Java <code>final</code> Method</h2>

  <p>
    In Java, a method declared with the <code>final</code> keyword cannot be overridden by subclasses. This is particularly useful when you want to prevent modification of core behaviors in child classes.
  </p>

  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">class FinalDemo {
    // create a final method
    public final void display() {
      System.out.println("This is a final method.");
    }
}

class Main extends FinalDemo {
  // try to override final method
  public final void display() {
    System.out.println("The final method is overridden.");
  }

  public static void main(String[] args) {
    Main obj = new Main();
    obj.display();
  }
}</pre>
  </div>

  <div class="output-box">
    <strong>Compilation Error:</strong><br>
    <ul class="style-output-other">
     <li>display() in Main cannot override display() in FinalDemo</li>
      <li> &nbsp;&nbsp;&nbsp;&nbsp;public final void display() {</li>
       <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;^</li>
        <li> overridden method is final</li>
</ul>
  </div>
 <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>
  <div class="styled-box">
    <strong>Note:</strong> Use the <code>final</code> keyword in methods when you want to ensure that their implementation remains consistent and cannot be altered by subclasses.
  </div>
</div>
<!-- part 8 -->
 <div class="content-container">
  <h2>3. Java <code>final</code> Class</h2>

  <p>
    In Java, when a class is declared <code>final</code>, it cannot be inherited by any other class. This is useful when you want to prevent your class from being subclassed.
  </p>

  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">// create a final class
final class FinalClass {
  public void display() {
    System.out.println("This is a final method.");
  }
}

// try to extend the final class
class Main extends FinalClass {
  public void display() {
    System.out.println("The final method is overridden.");
  }

  public static void main(String[] args) {
    Main obj = new Main();
    obj.display();
  }
}</pre>
  </div>

  <div class="output-box">
    <strong>Compilation Error:</strong><br>
    <ul class="style-output-other">
     <li>cannot inherit from final FinalClass</li>
      <li> class Main extends FinalClass {</li>
       <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;^</li>
</ul>

  </div>
<div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>
  <div class="styled-box">
    <strong>Note:</strong> Declaring a class as <code>final</code> is a way to ensure the integrity of your class implementation and prevent any unwanted subclass behavior.
  </div>
</div>

<div class="reference-container">
  <h3>Reference</h3>
  <ul class="style-output-other">
    <li>
      <a href="https://www.programiz.com/java-programming/final-keyword" target="_blank">
        Java final Keyword - Programiz
      </a>
    </li>
  </ul>
</div>
 

    `
  },

    interface: {
    id: "interface",
    title: "",
    description: `
        <!--java interface-->

<div class="content-container">
  <h1>Java Interface</h1>
  

  <h2>What is an Interface in Java?</h2>
  <p>
    An <strong>interface</strong> in Java is an abstract type used to define a contract of behaviors that a class can implement. It acts as a blueprint for classes and helps achieve full abstraction and multiple inheritance.
  </p>
  <p>
    A Java interface contains:
    <ul class="styled-box-output">
      <li>Static constants</li>
      <li>Abstract methods (without body)</li>
    </ul>
  </p>

  <h2>Key Properties of Interface:</h2>
  <ul class="styled-box-output">
    <li>Interfaces are used to achieve abstraction.</li>
    <li>All variables in an interface are <code>public static final</code> by default.</li>
    <li>All methods are <code>public abstract</code> unless default or static.</li>
    <li>Interfaces support multiple inheritance.</li>
    <li>Interfaces promote <strong>loose coupling</strong> — classes depend on behavior, not implementation.</li>
  </ul>

  <h2>Example: Interface in Java</h2>
  <p>This example demonstrates constants and abstract methods in an interface, and their implementation in a class.</p>

  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">interface testInterface {

    // public, static and final
    int a = 10;

    // public and abstract
    void display();
}

// Class implementing interface
class TestClass implements testInterface {

    // Implementing the interface method
    public void display(){
        System.out.println("Geek");
    }

    public static void main(String[] args) {
        TestClass obj = new TestClass();
        obj.display();
        System.out.println(a);
    }
}</pre>
  </div>

  <h3>Output:</h3>
  <div class="output-box">
    Geek<br>
    10
  </div>
<div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>

  <h2>Explanation:</h2>
  <ul class="styled-box-output">
    <li><code>testInterface</code> defines a constant <code>a</code> and an abstract method <code>display()</code>.</li>
    <li><code>TestClass</code> implements <code>testInterface</code> and provides an implementation for <code>display()</code>.</li>
    <li>When executed, the program prints the message from <code>display()</code> and the value of constant <code>a</code>.</li>
  </ul>

  <h2>Syntax of Interface in Java</h2>
  <div class="code-container">
    <pre class="code-block">interface InterfaceName {

    // Constant fields (public static final by default)  
    int CONSTANT = 10;

    // Abstract method (public abstract by default)  
    void methodName();

    // Default method (JDK 8+)
    default void defaultMethod() {
        System.out.println("Default implementation");
    }

    // Static method (JDK 8+)
    static void staticMethod() {
        System.out.println("Static method in interface");
    }

    // Private method (JDK 9+)
    private void privateMethod() {
        System.out.println("Private helper method");
    }
}</pre>
  </div>

  <h3>Important Notes:</h3>
  <ul class="styled-box-output">
    <li><strong>Private methods</strong> can only be used within default or static methods inside the interface — they are not accessible by implementing classes.</li>
    <li><strong>Static methods</strong> can only be accessed via the interface name — not through implementing class objects.</li>
    <li>All methods in an interface are implicitly <code>public</code> and <code>abstract</code> unless otherwise specified (default, static, private).</li>
    <li>To implement an interface, use the <code>implements</code> keyword in your class.</li>
  </ul>

  <h2>Conclusion</h2>
  <p>
    Interfaces are a powerful feature in Java to enforce behavior contracts, enable multiple inheritance, and build loosely coupled applications. By understanding interfaces, developers can write cleaner and more maintainable code.
  </p>
</div>

<!---->

<div class="content-container">
  <h1>Relationship Between Class and Interface</h1>

  <h2>Overview</h2>
  <p>
    In Java, both <strong>classes</strong> and <strong>interfaces</strong> are used to define the structure and behavior of objects, but they serve different purposes. 
    A class can <code>extend</code> another class, and similarly, an interface can <code>extend</code> another interface. However, only a class can <code>implement</code> an interface. 
    Interfaces cannot implement classes.
  </p>

  <h2>Difference Between Class and Interface</h2>
  <p>
    Although classes and interfaces may seem similar, they have significant differences in structure, behavior, and usage. The following table highlights these key differences:
  </p>

  <div class="table-container">
  <table class="styled-table" style="width: 100%; border-collapse: collapse; margin-top: 1rem; font-size: 1rem;">
  <thead>
    <tr style="background-color: #e3f2fd;">
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Feature</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Class</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Interface</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">Instantiation</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Can create objects</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Cannot create objects</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">Variables</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Can have instance variables</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Only <code>public static final</code> (constants)</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">Methods</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Can have concrete methods</td>
      <td style="padding: 8px; border: 1px solid #ddd;">All methods are abstract by default</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">Inheritance</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Supports single inheritance</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Supports multiple inheritance</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">Constructors</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Can have constructors</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Constructors are not allowed</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">Access Modifiers</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Supports <code>private</code>, <code>protected</code>, <code>public</code>, and <code>default</code></td>
      <td style="padding: 8px; border: 1px solid #ddd;">All members are <code>public</code> by default</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">Keyword</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Defined using <code>class</code></td>
      <td style="padding: 8px; border: 1px solid #ddd;">Defined using <code>interface</code></td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">Default Methods</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Not supported</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Supported (since JDK 8)</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">Static Methods</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Can have static methods</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Supported (since JDK 8)</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">Private Methods</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Can have private methods</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Supported (since JDK 9)</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">Main Method</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Can have <code>main()</code> method</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Can also have <code>main()</code> (since JDK 8)</td>
    </tr>
  </tbody>
</table>

  </div>

  <h2>When to Use a Class?</h2>
  <ul class="styled-box-output">
    <li>When you need to represent a real-world entity with both attributes (fields) and behaviors (methods).</li>
    <li>When you want to create objects that hold a specific state and perform actions.</li>
    <li>To define templates for objects with particular functionality and properties.</li>
  </ul>

  <h2>When to Use an Interface?</h2>
  <ul class="styled-box-output">
    <li>When you need to define a contract that multiple classes should follow.</li>
    <li>When you want to achieve abstraction without worrying about implementation details.</li>
    <li>To achieve multiple inheritance in Java.</li>
  </ul>

  <h2>Implementing an Interface</h2>
  <p>To implement an interface in a class, use the <code>implements</code> keyword.</p>

  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">interface Animal {
    void makeSound();
}

class Dog implements Animal {
    public void makeSound() {
        System.out.println("Bark");
    }

    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.makeSound();
    }
}</pre>
  </div>

  <h3>Output:</h3>
  <div class="output-box">
    Bark
  </div>
<div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>

  <h2>Conclusion</h2>
  <p>
    Understanding the relationship and differences between <strong>classes</strong> and <strong>interfaces</strong> is essential to write clean, flexible, and maintainable Java code. 
    Use classes to build concrete implementations and interfaces to define expected behavior across unrelated types.
  </p>
</div>

<!---->

<div class="content-container">
  <h1>Example: Interface Implementation with Vehicle Types</h1>

  <h2>Overview</h2>
  <p>
    Let's consider a real-world scenario involving vehicles like <strong>bicycles</strong>, <strong>cars</strong>, and <strong>bikes</strong>. 
    These share common functionalities such as <em>changing gears</em>, <em>speeding up</em>, and <em>applying brakes</em>. 
    These functionalities can be defined in an <code>interface</code>, allowing each class to implement them in its own way.
  </p>
  <p>
    This approach ensures <strong>code reusability</strong>, <strong>scalability</strong>, and <strong>consistency</strong> across different types of vehicles.
  </p>

  <h2>Java Example</h2>
  <p>
    The example below shows how an interface named <code>Vehicle</code> defines common behaviors which are implemented differently by the <code>Bicycle</code> and <code>Bike</code> classes.
  </p>

  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">import java.io.*;

interface Vehicle {
    void changeGear(int a);
    void speedUp(int a);
    void applyBrakes(int a);
}

class Bicycle implements Vehicle {
    int speed;
    int gear;

    @Override
    public void changeGear(int newGear){
        gear = newGear;
    }

    @Override
    public void speedUp(int increment){
        speed = speed + increment;
    }

    @Override
    public void applyBrakes(int decrement){
        speed = speed - decrement;
    }

    public void printStates() {
        System.out.println("speed: " + speed + " gear: " + gear);
    }
}

class Bike implements Vehicle {
    int speed;
    int gear;

    @Override
    public void changeGear(int newGear){
        gear = newGear;
    }

    @Override
    public void speedUp(int increment){
        speed = speed + increment;
    }

    @Override
    public void applyBrakes(int decrement){
        speed = speed - decrement;
    }

    public void printStates() {
        System.out.println("speed: " + speed + " gear: " + gear);
    }
}

public class Main {
    public static void main(String[] args) {
        Bicycle bicycle = new Bicycle();
        bicycle.changeGear(2);
        bicycle.speedUp(3);
        bicycle.applyBrakes(1);
        System.out.print("Bicycle present state : ");
        bicycle.printStates();

        Bike bike = new Bike();
        bike.changeGear(1);
        bike.speedUp(4);
        bike.applyBrakes(3);
        System.out.print("Bike present state : ");
        bike.printStates();
    }
}</pre>
  </div>

  <h3>Output:</h3>
  <div class="output-box">
    Bicycle present state : speed: 2 gear: 2<br>
    Bike present state : speed: 1 gear: 1
  </div>
<div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>
  <h2>Conclusion</h2>
  <p>
    This example illustrates how interfaces help standardize functionality across multiple classes while allowing each to maintain its own internal implementation. 
    It's a powerful way to ensure flexibility and modularity in your object-oriented designs.
  </p>
</div>

<!---->

<div class="content-container">
  <h1>Multiple Inheritance in Java Using Interface</h1>

  <h2>Concept Overview</h2>
  <p>
    Multiple Inheritance is an Object-Oriented Programming (OOP) concept where a class can inherit features from more than one parent class. 
    Java does not support multiple inheritance with classes to avoid ambiguity issues. 
    However, multiple inheritance is possible in Java using <code>interfaces</code>.
  </p>
  <p>
    Let's see an example where a class implements multiple interfaces to perform addition and subtraction operations.
  </p>

  <h2>Example: Implementing Multiple Interfaces</h2>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">import java.io.*;

// Add interface
interface Add {
    int add(int a, int b);
}

// Sub interface
interface Sub {
    int sub(int a, int b);
}

// Calculator class implementing Add and Sub interfaces
class Cal implements Add, Sub {
    // Method to add two numbers
    public int add(int a, int b) {
        return a + b;
    }

    // Method to subtract two numbers
    public int sub(int a, int b) {
        return a - b;
    }
}

class GFG {
    public static void main(String[] args) {
        Cal x = new Cal();
        System.out.println("Addition : " + x.add(2, 1));
        System.out.println("Subtraction : " + x.sub(2, 1));
    }
}</pre>
  </div>

  <h3>Output:</h3>
  <div class="output-box">
    Addition : 3<br>
    Subtraction : 1
  </div>
<div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>

  <h1>New Features Added in Interfaces in JDK 8</h1>

  <h2>Default Methods</h2>
  <p>
    Starting from JDK 8, interfaces can have <strong>default methods</strong> with a method body.
    This feature allows adding new methods to interfaces without breaking existing implementations.
  </p>
  <p>Here is an example demonstrating the use of default methods in interfaces.</p>

  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">// Interface with default method (JDK 8+)
interface TestInterface {
    final int a = 10;

    default void display() {
        System.out.println("hello");
    }
}

// Class implementing the interface
class TestClass implements TestInterface {
    public static void main(String[] args) {
        TestClass t = new TestClass();
        t.display();
    }
}</pre>
  </div>

  <h3>Output:</h3>
  <div class="output-box">
    hello
  </div>
  <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>

</div>

<!---->
<div class="content-container">

  <h1>2. Static Methods in Interfaces</h1>
  <p>
    Since JDK 8, interfaces in Java can include <strong>static methods</strong>. 
    These methods can be called directly using the interface name without needing an object instance. 
    Static methods in interfaces are <em>not inherited</em> by implementing classes.
  </p>
  <p>
    This feature allows interfaces to have helper or utility methods.
  </p>

  <h2>Example: Using Static Methods in Interfaces</h2>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">interface TestInterface {
    final int a = 10;

    static void display() {
        System.out.println("hello");
    }
}

// A class that implements the interface
class TestClass implements TestInterface {
    public static void main(String[] args) {
        // Call static method directly using interface name
        TestInterface.display();
    }
}</pre>
  </div>

  <h3>Output:</h3>
  <div class="output-box">
    hello
  </div>
<div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>

  <h1>3. Private Methods in Interfaces</h1>
  <p>
    Starting from JDK 9, interfaces can have <strong>private methods</strong> which are used for internal helper methods inside the interface.
  </p>
  <p>
    Private methods cannot be accessed or overridden by implementing classes since they are not inherited.
  </p>
  <p>
    Private methods are typically called from other methods within the same interface, such as <code>default</code> or <code>static</code> methods.
  </p>

  <h2>Example: Private Methods Used Inside Default Methods</h2>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">interface Vehicle {
    // Private method for internal use
    private void startEngine() {
        System.out.println("Engine started.");
    }

    // Default method that calls the private method
    default void drive() {
        startEngine();
        System.out.println("Vehicle is now driving.");
    }
}

class Car implements Vehicle {
    // Inherits default method 'drive' from Vehicle interface
}

public class Main {
    public static void main(String[] args) {
        Car car = new Car();
        // Calls default method which internally calls the private method
        car.drive();
    }
}</pre>
  </div>

  <h3>Output:</h3>
  <div class="output-box">
    Engine started.<br>
    Vehicle is now driving.
  </div>
<div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>

  <h1>4. Functional Interface</h1>
  <p>
    A <strong>Functional Interface</strong> is an interface with exactly one abstract method. 
    It can be used as the target for lambda expressions or method references in Java.
  </p>
  <p>
    The <code>@FunctionalInterface</code> annotation can be applied to indicate that an interface is intended to be a functional interface, but this is optional.
  </p>

  <h2>Example: Functional Interface Declaration</h2>
  <div class="code-container">
    <pre class="code-block">@FunctionalInterface
interface MyFunctionalInterface {
    void singleAbstractMethod();
}</pre>
  </div>

</div>

<!---->
<div class="content-container">

  <h1>Extending Interfaces in Java</h1>
  <p>
    One interface can inherit another interface using the <code>extends</code> keyword.
    When a class implements an interface that extends another interface, it must provide implementations for <em>all</em> methods in the entire interface inheritance chain.
  </p>

  <h2>Example: Interface Inheritance</h2>
  <p>This example demonstrates how interface <code>B</code> extends interface <code>A</code>, and a class <code>GFG</code> implements all methods from both interfaces.</p>
  
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">interface A {
    void method1();
    void method2();
}

// B now includes method1 and method2
interface B extends A {
    void method3();
}

// Class must implement all methods of A and B
class GFG implements B {
    public void method1() {
        System.out.println("Method 1");
    }
  
    public void method2() {
        System.out.println("Method 2");
    }
  
    public void method3() {
        System.out.println("Method 3");
    }
  
    public static void main(String[] args){
        GFG x = new GFG();
        x.method1();
        x.method2();
        x.method3();
    }
}</pre>
  </div>

  <h3>Output:</h3>
  <div class="output-box">
    Method 1<br>
    Method 2<br>
    Method 3
  </div>
<div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>

  <h1>Stepwise Interface and Abstract Class Implementation</h1>
  <p>
    Interfaces contain multiple abstract methods. When a class implements an interface, it must provide implementations for all those methods.
    If the class cannot implement all abstract methods, it should be declared <code>abstract</code>, and the remaining methods can be implemented in subclasses.
    This stepwise approach helps organize complex implementations.
  </p>

  <p>General development process:</p>
  <ul class="styled-box-output">
    <li><strong>Level 1 - Interfaces:</strong> Define service contracts (method signatures).</li>
    <li><strong>Level 2 - Abstract Classes:</strong> Provide partial implementation.</li>
    <li><strong>Level 3 - Implementation Classes:</strong> Provide full implementation.</li>
    <li><strong>Level 4 - Main Method:</strong> Access and test the complete implementation.</li>
  </ul>

  <h2>Example: Level-wise Implementation of Interfaces and Abstract Classes</h2>
  <p>This example shows an interface and a hierarchy of abstract and concrete classes implementing it stepwise.</p>

  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">// Level 1
interface Bank {
    void deposit();
    void withdraw();
    void loan();
    void account();
}

// Level 2
abstract class Dev1 implements Bank {
    public void deposit() {
        System.out.println("Your deposit Amount :" + 100);
    }
}

abstract class Dev2 extends Dev1 {
    public void withdraw() {
        System.out.println("Your withdraw Amount :" + 50);
    }
}

// Level 3
class Dev3 extends Dev2 {
    public void loan() {}
    public void account() {}
}

// Level 4
class Main {
    public static void main(String[] args) {
        Dev3 d = new Dev3();
        d.account();
        d.loan();
        d.deposit();
        d.withdraw();
    }
}</pre>
  </div>

  <h3>Output:</h3>
  <div class="output-box">
    Your deposit Amount :100<br>
    Your withdraw Amount :50
  </div>
  <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>

</div>

<!---->

<div class="content-container">

  <h1>Advantages of Interfaces in Java</h1>
  <p>
    Interfaces provide a way to achieve abstraction without worrying about the implementation details. They offer several benefits, including:
  </p>
  <ul class="styled-box-output">
    <li><strong>Implementation Security:</strong> You can secure the implementation details by separating the interface from the class that implements it.</li>
    <li><strong>Multiple Inheritance:</strong> Java does not allow multiple inheritance with classes, but you can implement multiple interfaces to achieve similar functionality.</li>
  </ul>

  <h2>New Features Added in Interfaces (From JDK 9)</h2>
  <p>Starting from Java 9, interfaces have been enhanced to allow:</p>
  <ul class="styled-box-output">
    <li>Static methods</li>
    <li>Private methods</li>
    <li>Private static methods</li>
  </ul>

  <h2>Important Points About Interfaces</h2>
  <ul class="styled-box-output">
    <li>You cannot create an instance of an interface (interfaces cannot be instantiated).</li>
    <li>You can create a reference variable of an interface type that points to an object of a class implementing that interface.</li>
    <li>A class can implement multiple interfaces.</li>
    <li>An interface can extend one or more other interfaces.</li>
    <li>A class implementing an interface must implement all the methods declared in the interface.</li>
    <li>All interface methods are <code>public</code> and <code>abstract</code> by default.</li>
    <li>All fields (variables) declared in an interface are <code>public</code>, <code>static</code>, and <code>final</code> by default.</li>
    <li>Interfaces help achieve multiple inheritances and loose coupling.</li>
    <li>Interfaces cannot have instance variables because all variables are implicitly <code>public static final</code>.</li>
    <li>Interfaces cannot have constructors.</li>
    <li>From JDK 8 onwards, interfaces can have a <code>main</code> method for execution.</li>
    <li>From JDK 8 and 9, interfaces can declare static, final, and private methods.</li>
  </ul>

</div>

    `
  },
   accessmodifiers: {
    id: "accessmodifiers",
    title: "",
    description: `
     <div class="content-container">
  <h1>Access Modifiers in Java</h1>
  

  <h2>What are Access Modifiers?</h2>
  <p>Access modifiers in Java are keywords used to define the scope or accessibility of classes, constructors, methods, and data members. Java provides four types of access modifiers:</p>
  <ul class="styled-box-output">
    <li>default (no modifier)</li>
    <li>private</li>
    <li>protected</li>
    <li>public</li>
  </ul>

  <h2>1. Default Access Modifier</h2>
  <p>When no access modifier is specified, the default access level is applied. The scope is limited to the same package.</p>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">// Addition.java
package abcpackage;

public class Addition {
    int addTwoNumbers(int a, int b) {
        return a + b;
    }
}

// Test.java
package xyzpackage;
import abcpackage.*;

public class Test {
    public static void main(String args[]) {
        Addition obj = new Addition();
        obj.addTwoNumbers(10, 21); // Compilation Error
    }
}</pre>
  </div>
  <div class="output-box">
    <strong>Output</strong><br/>
    <ul class="style-output-other">
     <li>Error: The method addTwoNumbers(int, int) from the type Addition is not visible</li>
    </ul>
    
  </div>

   <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>

  <h2>2. Private Access Modifier</h2>
  <p>The <code>private</code> modifier restricts access to within the class only. Classes and interfaces cannot be private.</p>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">class ABC {
    private double num = 100;
    private int square(int a) {
        return a * a;
    }
}

public class Example {
    public static void main(String args[]) {
        ABC obj = new ABC();
        System.out.println(obj.num);     // Compilation Error
        System.out.println(obj.square(10)); // Compilation Error
    }
}</pre>
  </div>
  <div class="output-box">
    <strong>Output</strong><br/>
    <ul class="style-output-other">
     <li> Compile-time error</li>
</ul>
   
  </div>
   <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>

  <h2>3. Protected Access Modifier</h2>
  <p>Protected members are accessible within the same package and subclasses in other packages. It is commonly used in inheritance.</p>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">// Addition.java
package abcpackage;

public class Addition {
    protected int addTwoNumbers(int a, int b) {
        return a + b;
    }
}

// Test.java
package xyzpackage;
import abcpackage.*;

class Test extends Addition {
    public static void main(String args[]) {
        Test obj = new Test();
        System.out.println(obj.addTwoNumbers(11, 22));
    }
}</pre>
  </div>
  <div class="output-box">
    <strong>Output</strong><br/>
    <ul class="style-output-other">
     <li>33</li>
</ul>
    
  </div>
   <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>

  <h2>4. Public Access Modifier</h2>
  <p>The <code>public</code> modifier allows the widest level of access. Members declared public can be accessed from any other class.</p>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">// Addition.java
package abcpackage;

public class Addition {
    public int addTwoNumbers(int a, int b) {
        return a + b;
    }
}

// Test.java
package xyzpackage;
import abcpackage.*;

class Test {
    public static void main(String args[]) {
        Addition obj = new Addition();
        System.out.println(obj.addTwoNumbers(100, 1));
    }
}</pre>
  </div>
  <div class="output-box">
    <strong>Output</strong><br/>
    <ul class="style-output-other">
     <li> 101</li>
</ul>
   
  </div>

   <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>

  <h2>Access Modifier Scope Table</h2>
 <table class="styled-table" style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
  <thead>
    <tr style="background-color: #e3f2fd;">
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Modifier</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Class</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Package</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Subclass (same package)</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Subclass (diff package)</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Outside Class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">public</td>
      <td style="padding: 8px; border: 1px solid #ddd;">✔️</td>
      <td style="padding: 8px; border: 1px solid #ddd;">✔️</td>
      <td style="padding: 8px; border: 1px solid #ddd;">✔️</td>
      <td style="padding: 8px; border: 1px solid #ddd;">✔️</td>
      <td style="padding: 8px; border: 1px solid #ddd;">✔️</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">protected</td>
      <td style="padding: 8px; border: 1px solid #ddd;">✔️</td>
      <td style="padding: 8px; border: 1px solid #ddd;">✔️</td>
      <td style="padding: 8px; border: 1px solid #ddd;">✔️</td>
      <td style="padding: 8px; border: 1px solid #ddd;">✔️</td>
      <td style="padding: 8px; border: 1px solid #ddd;">❌</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">default</td>
      <td style="padding: 8px; border: 1px solid #ddd;">✔️</td>
      <td style="padding: 8px; border: 1px solid #ddd;">✔️</td>
      <td style="padding: 8px; border: 1px solid #ddd;">✔️</td>
      <td style="padding: 8px; border: 1px solid #ddd;">❌</td>
      <td style="padding: 8px; border: 1px solid #ddd;">❌</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">private</td>
      <td style="padding: 8px; border: 1px solid #ddd;">✔️</td>
      <td style="padding: 8px; border: 1px solid #ddd;">❌</td>
      <td style="padding: 8px; border: 1px solid #ddd;">❌</td>
      <td style="padding: 8px; border: 1px solid #ddd;">❌</td>
      <td style="padding: 8px; border: 1px solid #ddd;">❌</td>
    </tr>
  </tbody>
</table>

</div>
    `
  },
    inout: {
    id: "inout",
    title: "",
    description: `
    <div class="content-container">
  <h1>User Input in Java</h1>
  

  <h2>Introduction</h2>
  <p>To take input from the user in Java, the <code>Scanner</code> class is used. The <code>Scanner</code> class is a built-in class of the <code>java.util</code> package.</p>
  <p>The <code>Scanner</code> class provides many built-in methods to take different types of user inputs.</p>

  <h2>How to Use Scanner Class to Take User Input?</h2>
  <ol class="styled-box-output">
    <li><strong>Import Scanner Class</strong><br/>
      <p>First, import the Scanner class using the statement:</p>
      <div class="code-container">
        <pre class="code-block">import java.util.Scanner;</pre>
      </div>
    </li>
    <li><strong>Create Scanner Object</strong><br/>
      <p>Create an object of the Scanner class by invoking its constructor:</P>
      <div class="code-container">
        <pre class="code-block">Scanner obj = new Scanner(System.in);</pre>
      </div>
    </li>
    <li><strong>Take User Input</strong><br/>
      <p>Use appropriate methods of the Scanner object to read input. For example, to read an integer:</p>
      <div class="code-container">
        <pre class="code-block">int age = obj.nextInt();</pre>
      </div>
    </li>
  </ol>

  <h2>Example: Adding Two Numbers</h2>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">// Importing the class
import java.util.Scanner;

public class AddTwoNumbers {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the first number: ");
        int num1 = sc.nextInt();

        System.out.print("Enter the second number: ");
        int num2 = sc.nextInt();

        int sum = num1 + num2;

        System.out.println("The sum of the two numbers is: " + sum);
    }
}</pre>
  </div>
  <div class="output-box">
    <strong>Output</strong><br/>
    <ul class="style-output-other">
     <li>Enter the first number: 10</li>
     <li>Enter the second number: 20</li>
     <li>The sum of the two numbers is: 30</li>
    </ul>
    
  </div>
   <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>

  <h2>Methods for Different Types of User Inputs</h2>
  <p>The Scanner class provides several methods to take various types of inputs. Here's a summary:</p>
<table class="styled-table" style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
  <thead>
    <tr style="background-color: #e3f2fd;">
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Sr.No.</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Method & Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">1</td>
      <td style="padding: 8px; border: 1px solid #ddd;"><code>String next()</code>: Returns the next complete token as a String.</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">2</td>
      <td style="padding: 8px; border: 1px solid #ddd;"><code>BigDecimal nextBigDecimal()</code>: Reads next token as BigDecimal.</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">3</td>
      <td style="padding: 8px; border: 1px solid #ddd;"><code>BigInteger nextBigInteger()</code>: Reads next token as BigInteger.</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">4</td>
      <td style="padding: 8px; border: 1px solid #ddd;"><code>boolean nextBoolean()</code>: Reads next token as boolean.</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">5</td>
      <td style="padding: 8px; border: 1px solid #ddd;"><code>byte nextByte()</code>: Reads next token as byte.</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">6</td>
      <td style="padding: 8px; border: 1px solid #ddd;"><code>double nextDouble()</code>: Reads next token as double.</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">7</td>
      <td style="padding: 8px; border: 1px solid #ddd;"><code>float nextFloat()</code>: Reads next token as float.</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">8</td>
      <td style="padding: 8px; border: 1px solid #ddd;"><code>int nextInt()</code>: Reads next token as int.</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">9</td>
      <td style="padding: 8px; border: 1px solid #ddd;"><code>String nextLine()</code>: Reads the entire line as String.</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">10</td>
      <td style="padding: 8px; border: 1px solid #ddd;"><code>long nextLong()</code>: Reads next token as long.</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">11</td>
      <td style="padding: 8px; border: 1px solid #ddd;"><code>short nextShort()</code>: Reads next token as short.</td>
    </tr>
  </tbody>
</table>


  <h1>Integer Input from the User</h1>
  <p>The <code>nextInt()</code> method is used to take integer input from the user.</p>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">// Importing the class
import java.util.Scanner;

public class IntegerInput {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Input an integer value: ");
        int int_num = sc.nextInt();

        System.out.print("The input is : " + int_num);
    }
}</pre>
  </div>
  <div class="output-box">
    <strong>Output</strong><br/>
    <ul class="style-output-other">
     <li>Input an integer value: 101</li>
     <li>The input is : 101</li>
    </ul>
  </div>

   <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>

  <h1>Float Input from the User</h1>
  <p>The <code>nextFloat()</code> method is used to take float input from the user.</p>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">// Importing the class
import java.util.Scanner;

public class FloatInput {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Input a float value: ");
        float float_num = sc.nextFloat();

        System.out.print("The input is : " + float_num);
    }
}</pre>
  </div>
  <div class="output-box">
    <strong>Output</strong><br/>
    <ul class="style-output-other">
     <li> Input a float value: 12.345</li>
     <li> The input is : 12.345</li>
    </ul>
  </div>

   <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>

  <h1>String Input from the User</h1>
  <p>The <code>nextLine()</code> method is used to take string input (including spaces) from the user.</p>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">// Importing the class
import java.util.Scanner;

public class StringInput {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Input a string value: ");
        String str = sc.nextLine();

        System.out.print("The input is : " + str);
    }
}</pre>
  </div>
  <div class="output-box">
    <strong>Output</strong><br/>
    <ul class="style-output-other">
     <li> Input a string value: Hello World</li>
     <li> The input is : Hello World</li>
    </ul>
  </div>

   <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>
    `
  },

    methodoverloading: {
    id: "methodoverloading",
    title: "",
    description: `
      
<div id="java-methods" class="content-container">
  <!-- Your Java Method Basics Content -->
    <a href="#java-methods" style="display: inline-block; margin-bottom: 1rem; color: #1e88e5; text-decoration: none; font-weight: bold;">Go to Java Method Basics before method-overloading...</a>
</div>

<div class="content-container" id="method-overloading">
 

  <h1>Java Method Overloading</h1>
  <p>
    In Java, method overloading allows multiple methods to have the same name, as long as their parameter lists are different. This can involve:
  </p>
  <ul class="bullet-list">
    <li>Different number of parameters</li>
    <li>Different types of parameters</li>
    <li>Both number and types being different</li>
  </ul>
  <p>This is an example of method overloading:</p>

  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">
void func() {
    // No parameter
}

void func(int a) {
    // Single integer parameter
}

float func(double a) {
    // Single double parameter, returns float
}

float func(int a, float b) {
    // Two parameters, different types
}
   </pre>
  </div>

  <div class="styled-box">
    <strong>Note:</strong> Method overloading is not determined by return type. All methods above are valid overloads because they differ in parameter types or count, regardless of return type.
  </div>
</div>

<!-- part-2 -->
 <div class="content-container" id="why-method-overloading">
  <h1>Why Method Overloading?</h1>
  <p>
    Suppose you need to perform the addition of given numbers, but the number of arguments may vary—for instance, you may need to add either two or three numbers.
  </p>
  <p>
    One way to handle this is by defining separate methods like <code>sum2num(int, int)</code> and <code>sum3num(int, int, int)</code>. Although both methods perform similar actions (adding numbers), their names differ. This can cause confusion for other developers or even for you in the future.
  </p>

  <p>
    A better and more readable approach is to use method overloading. In this case, you define methods with the same name but different parameter lists. Based on the number and type of arguments passed, the correct version of the overloaded method is automatically invoked.
  </p>

  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">
public class Calculator {
    // Method for adding two numbers
    int sum(int a, int b) {
        return a + b;
    }

    // Overloaded method for adding three numbers
    int sum(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println("Sum of 2 numbers: " + calc.sum(5, 10));
        System.out.println("Sum of 3 numbers: " + calc.sum(5, 10, 15));
    }
}
   </pre>
  </div>

  <div class="styled-box">
    <strong>Benefit:</strong> Method overloading helps improve code readability and usability by using the same method name for logically similar operations.
  </div>
   <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>
</div>

<!-- part-3 -->

<div class="content-container" id="method-overloading-java">
  <h1>How to Perform Method Overloading in Java?</h1>
  <p>Here are different ways to perform method overloading:</p>

  <h3>1. Overloading by Changing the Number of Parameters</h3>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">
class MethodOverloading {
    private static void display(int a){
        System.out.println("Arguments: " + a);
    }

    private static void display(int a, int b){
        System.out.println("Arguments: " + a + " and " + b);
    }

    public static void main(String[] args) {
        display(1);
        display(1, 4);
    }
}
  </pre>
  </div>

  <div class="output-box">
    <strong>Output:</strong><br>
    <ul class="style-output-other">
     <li>Arguments: 1</li>
     <li>Arguments: 1 and 4</li>
    </ul>
  </div>

   <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>

  <h3>2. Overloading by Changing the Data Type of Parameters</h3>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">
class MethodOverloading {

    // this method accepts int
    private static void display(int a){
        System.out.println("Got Integer data.");
    }

    // this method accepts String object
    private static void display(String a){
        System.out.println("Got String object.");
    }

    public static void main(String[] args) {
        display(1);
        display("Hello");
    }
}
    </pre>
  </div>

  <div class="output-box">
    <strong>Output:</strong><br>
    <ul class="style-output-other">
     <li>Got Integer data.</li>
     <li>Got String object.</li>
    </ul>
  </div>
 <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>
  <h3>3. Real-world Example of Method Overloading</h3>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">
class HelperService {

    private String formatNumber(int value) {
        return String.format("%d", value);
    }

    private String formatNumber(double value) {
        return String.format("%.3f", value);
    }

    private String formatNumber(String value) {
        return String.format("%.2f", Double.parseDouble(value));
    }

    public static void main(String[] args) {
        HelperService hs = new HelperService();
        System.out.println(hs.formatNumber(500));
        System.out.println(hs.formatNumber(89.9934));
        System.out.println(hs.formatNumber("550"));
    }
}
   </pre>
  </div>

  <div class="output-box">
    <strong>Output:</strong><br>
    <ul class="style-output-other">
     <li>500</li>
     <li>89.993</li>
     <li>550.00</li>
</ul>
  </div>

  <div class="styled-box">
    <strong>Note:</strong> In Java, you can also overload constructors using similar principles as method overloading.
  </div>

  <p> Recommended Reading: <a href="https://www.programiz.com/java-programming/method-overloading" target="_blank" style="color: #1e88e5;";>Java Constructor Overloading</a></p>
</div>
<!-- part-4 -->
<div class="content-container" id="method-overloading-points">
  <h1>Important Points</h1>
  <ul class="styled-box-output">
    <li><strong>Two or more methods</strong> can have the same name inside the same class if they accept different arguments. This feature is known as <strong>method overloading</strong>.</li>
    <li><strong>Method overloading is achieved</strong> by either:
      <ul>
        <li>Changing the <strong>number of arguments</strong>.</li>
        <li>Changing the <strong>data type of arguments</strong>.</li>
      </ul>
    </li>
    <li>It is <strong>not method overloading</strong> if we only change the return type of methods. There must be differences in the number or types of parameters.</li>
  </ul>
</div>

    `
  },
    static: {
    id: "static",
    title: "",
    description: `
     <div class="content-container">
  <h1>What is a static keyword in Java?</h1>

  <p>In Java, if we want to access class members, we must first create an instance of the class. But there will be situations where we want to access class members without creating any variables.</p>

  <p>In those situations, we can use the <code>static</code> keyword in Java. If we want to access class members without creating an instance of the class, we need to declare the class members static.</p>

  <p>The <code>Math</code> class in Java has almost all of its members static. So, we can access its members without creating instances of the <code>Math</code> class. For example,</p>

  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">public class Main {
    public static void main(String[] args) {

        // accessing the methods of the Math class
        System.out.println("Absolute value of -12 =  " + Math.abs(-12));
        System.out.println("Value of PI = " + Math.PI);
        System.out.println("Value of E = " + Math.E);
        System.out.println("2^2 = " + Math.pow(2,2));
    }
}</pre>
  </div>

  <div class="output-box">
    <strong>Output:</strong><br>
    <ul class="style-output-other">
     <li>Absolute value of -12 = 12</li>
     <li>Value of PI = 3.141592653589793</li>
     <li>Value of E = 2.718281828459045</li>
     <li>2^2 = 4.0</li>
   </ul>  
  </div>
 <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>
  <p>In the above example, we have not created any instances of the <code>Math</code> class. But we are able to access its methods: <code>abs()</code> and <code>pow()</code> and variables: <code>PI</code> and <code>E</code>.</p>

  <p>It is possible because the methods and variables of the <code>Math</code> class are static.</p>
</div>
<!-- part -2 -->
 <div class="content-container">
  <h1>Static Methods</h1>

  <p>Static methods are also called class methods. It is because a static method belongs to the class rather than the object of a class.</p>

  <p>And we can invoke static methods directly using the class name. For example,</p>

  <div class="code-container">
    <pre class="code-block">class Test {
    // static method inside the Test class
    public static void method() {...}
}

class Main {
    // invoking the static method
    Test.method();
}</pre>
  </div>

  <p>Here, we can see that the static method can be accessed directly from other classes using the class name.</p>

  <p>In every Java program, we have declared the <code>main</code> method static. It is because to run the program the JVM should be able to invoke the <code>main</code> method during the initial phase where no objects exist in the memory.</p>

  <h2>Example 1: Java static and non-static Methods</h2>

  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">class StaticTest {

    // non-static method
    int multiply(int a, int b){
        return a * b;
    }

    // static method
    static int add(int a, int b){
        return a + b;
    }
}

public class Main {

   public static void main( String[] args ) {

        // create an instance of the StaticTest class
        StaticTest st = new StaticTest();

        // call the nonstatic method
        System.out.println(" 2 * 2 = " + st.multiply(2,2));

        // call the static method
        System.out.println(" 2 + 3 = " + StaticTest.add(2,3));
   }
}</pre>
  </div>

  <div class="output-box">
    <strong>Output:</strong><br>
    <ul class="style-output-other">
     <li> 2 * 2 = 4</li>
      <li>2 + 3 = 5</li>
</ul>
  </div>

   <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>

  <p>In the above program, we have declared a non-static method named <code>multiply()</code> and a static method named <code>add()</code> inside the class <code>StaticTest</code>.</p>

  <p>Inside the <code>Main</code> class, we can see that we are calling the non-static method using the object of the class (<code>st.multiply(2, 2)</code>). However, we are calling the static method by using the class name (<code>StaticTest.add(2, 3)</code>).</p>
</div>
<!-- part 3 -->
 <div class="content-container">
  <h1>Static Variables</h1>

  <p>In Java, when we create objects of a class, then every object will have its own copy of all the variables of the class. For example,</p>

  <div class="code-container">
    <pre class="code-block">class Test {
    // regular variable
    int age;
}

class Main {
    // create instances of Test
    Test test1 = new Test();
    Test test2 = new Test();
}</pre>
  </div>

  <p>Here, both the objects <code>test1</code> and <code>test2</code> will have separate copies of the variable <code>age</code>. And, they are different from each other.</p>

  <p>However, if we declare a variable <strong>static</strong>, all objects of the class share the same static variable. It is because like static methods, static variables are also associated with the class. And, we don't need to create objects of the class to access the static variables. For example,</p>

  <div class="code-container">
    <pre class="code-block">class Test {
    // static variable
    static int age;
}

class Main {
    // access the static variable
    Test.age = 20;
}</pre>
  </div>

  <p>Here, we can see that we are accessing the static variable from the other class using the class name.</p>

  <h2>Example 2: Java static and non-static Variables</h2>

  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">class Test {

    // static variable
    static int max = 10;
  
    // non-static variable
    int min = 5;
}

public class Main {
    public static void main(String[] args) {
        Test obj = new Test();

        // access the non-static variable
        System.out.println("min + 1 = " + (obj.min + 1));

        // access the static variable
        System.out.println("max + 1 = " + (Test.max + 1));
    }
}</pre>
  </div>

  <div class="output-box">
    <strong>Output:</strong><br>
    <ul class="style-output-other">
     <li> min + 1 = 6</li>
     <li> max + 1 = 11</li>
</ul>
    
  </div>
 <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>
  <p>In the above program, we have declared a non-static variable named <code>min</code> and a static variable named <code>max</code> inside the class <code>Test</code>.</p>

  <p>Inside the <code>Main</code> class, we can see that we are calling the non-static variable using the object of the class (<code>obj.min + 1</code>). However, we are calling the static variable by using the class name (<code>Test.max + 1</code>).</p>

  <div class="styled-box">
    <strong>Note:</strong> Static variables are rarely used in Java. Instead, the static constants are used. These static constants are defined by <code>static final</code> keyword and represented in uppercase. This is why some people prefer to use uppercase for static variables as well.
  </div>
</div>
<!-- part 4 -->
 <div class="content-container">
  <h1>Access Static Variables and Methods within the Class</h1>

  <p>We are accessing the static variable from another class. Hence, we have used the class name to access it. However, if we want to access the static member from inside the class, it can be accessed directly. For example,</p>

  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">public class Main {

    // static variable
    static int age;

    // static method
    static void display() {
        System.out.println("Static Method");
    }

    public static void main(String[] args) {

        // access the static variable
        age = 30;
        System.out.println("Age is " + age);

        // access the static method
        display();
    }
}</pre>
  </div>

  <div class="output-box">
    <strong>Output:</strong><br>
    <ul class="style-output-other">
     <li> Age is 30</li>
     <li>Static Method</li>
</ul>
  </div>
 <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>
  <p>Here, we are able to access the static variable and method directly without using the class name. It is because static variables and methods are by default <code>public</code>. And, since we are accessing them from the same class, we don't have to specify the class name.</p>
</div>

<!-- part 5 -->
 <div class="content-container">
  <h1>Static Blocks</h1>

  <p>In Java, static blocks are used to initialize the static variables. For example,</p>

  <div class="code-container">
    <pre class="code-block">class Test {
    // static variable
    static int age;

    // static block
    static {
        age = 23;
    }
}</pre>
  </div>

  <p>Here we can see that we have used a static block with the syntax:</p>

  <div class="code-container">
    <pre class="code-block">static {
    // variable initialization
}</pre>
  </div>

  <p>The static block is executed only once when the class is loaded in memory. The class is loaded if either the object of the class is requested in code or the static members are requested in code.</p>

  <p>A class can have multiple static blocks and each static block is executed in the same sequence in which they have been written in a program.</p>

  <h2>Example 3: Use of static block in Java</h2>

  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">class Main {

    // static variables
    static int a = 23;
    static int b;
    static int max;

    // static blocks
    static {
        System.out.println("First Static block.");
        b = a * 4;
    }

    static {
        System.out.println("Second Static block.");
        max = 30;
    }

    // static method
    static void display() {
        System.out.println("a = " + a);
        System.out.println("b = " + b);
        System.out.println("max = " + max);
    }

    public static void main(String args[]) {
        // calling the static method
        display();
    }
}</pre>
  </div>

  <div class="output-box">
    <strong>Output:</strong><br>
    <ul class="style-output-other">
     <li> First Static block.</li>
      <li>Second Static block.</li>
       <li> a = 23</li>
        <li>b = 92</li>
         <li> max = 30</li>
</ul>
  </div>

   <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>
  <p>In the above program, as soon as the <code>Main</code> class is loaded:</p>

  <ul class="bullet-list">
    <li>The value of <code>a</code> is set to <code>23</code>.</li>
    <li>The first static block is executed, printing <code>First Static block.</code> and setting <code>b = a * 4</code>.</li>
    <li>The second static block is executed, printing <code>Second Static block.</code> and setting <code>max = 30</code>.</li>
    <li>Finally, the statements inside the <code>display()</code> method are executed.</li>
  </ul>
</div>
<!-- part 6 -->
 <div class="content-container">
  <h1>Nested Static Class</h1>

  <p>In Java, we can declare a class inside another class. Such classes are known as <strong>nested classes</strong>. Nested classes are of two types:</p>

  <ul class="bullet-list">
    <li>Static Nested Classes</li>
    <li>Non-static Nested Classes</li>
  </ul>

  <p>For example,</p>

 <div class="code-container">
  <pre class="code-block">
class OuterClass {
    // static nested class
    static class NestedClass {
        void display() {
            System.out.println("Inside static nested class");
        }
    }

    // non-static nested class
    class InnerClass {
        void message() {
            System.out.println("Inside non-static inner class");
        }
    }
}
  </pre>
  <button class="copy-btn" onclick="copyCode(this)">Copy</button>
</div>

<div class="output-box">
  <strong>Output:</strong><br>
  <ul class="style-output-other">
    <li>Inside static nested class</li>
    <li>Inside non-static inner class</li>
  </ul>
</div>
 <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>

  <p>Static nested classes are associated with the outer class itself (not with instances of the outer class). Hence, they can be instantiated without creating an object of the outer class.</p>

  <p>Non-static nested classes (inner classes), on the other hand, require an instance of the outer class to be created.</p>

  <div class="info-box">
    <strong>Further Reading:</strong>
    <p>For an in-depth explanation with practical examples and diagrams, refer to the following article:</p>
    <a href="https://www.programiz.com/java-programming/static-keyword" target="_blank" class="link-button">
      Learn More About Static Keyword on Programiz
    </a>
    <p class="desc">This guide explains the <strong>static keyword</strong> in Java, including static variables, methods, blocks, and nested classes in a clear, beginner-friendly format.</p>
  </div>


</div>
    `
  },
    inheritance: {
    id: "inheritance",
    title: "",
    description: `
     <div class="content-container">
  <h1>Java Inheritance</h1>

  <p>
    Inheritance is one of the key features of Object-Oriented Programming (OOP) that allows us to create a new class from an existing class.
  </p>

  <p>
    The new class that is created is known as the <strong>subclass</strong> (child or derived class) and the existing class from where the child class is derived is known as the <strong>superclass</strong> (parent or base class).
  </p>

  <p>
    The <code>extends</code> keyword is used to perform inheritance in Java.
  </p>

  <h3>Example: Using <code>extends</code> for Inheritance</h3>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">class Animal {
   // methods and fields
}

// use of extends keyword to perform inheritance
class Dog extends Animal {

   // methods and fields of Animal
   // methods and fields of Dog
}</pre>
  </div>

  <p>
    In the above example, the <code>Dog</code> class is created by inheriting the methods and fields from the <code>Animal</code> class. Here, <code>Dog</code> is the subclass and <code>Animal</code> is the superclass.
  </p>

  <h3>Example 1: Java Inheritance</h3>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">class Animal {

   // field and method of the parent class
   String name;

   public void eat() {
      System.out.println("I can eat");
   }
}

// inherit from Animal
class Dog extends Animal {

   // new method in subclass
   public void display() {
      System.out.println("My name is " + name);
   }
}

class Main {
   public static void main(String[] args) {

      // create an object of the subclass
      Dog labrador = new Dog();

      // access field of superclass
      labrador.name = "Rohu";
      labrador.display();

      // call method of superclass using object of subclass
      labrador.eat();
   }
}</pre>
  </div>

  <div class="output-box">
    <strong>Output:</strong><br>
    <ul class="style-output-other">
     <li>My name is Rohu</li>
     <li>I can eat</li>
</ul>
  </div>

  <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>
  <p>
    In the above program, the <code>Dog</code> class extends the <code>Animal</code> class. It inherits the field <code>name</code> and method <code>eat()</code> from the superclass.
  </p>

  <p>
    The subclass <code>Dog</code> also defines its own method <code>display()</code>. When we use the object <code>labrador</code> of class <code>Dog</code>, we can access both inherited members and subclass methods.
  </p>

  <p>
    This is how Java supports reusability and extensibility through inheritance.
  </p>
</div>

<!---->

<div class="content-container">
  <h1>Java Inheritance and Method Overriding</h1>

  <p>
    In the following example, we derive a subclass <code>Dog</code> from the superclass <code>Animal</code>. 
    Notice these statements:
  </p>

  <pre><code>labrador.name = "Rohu";
labrador.eat();</code></pre>

  <p>
    Here, <code>labrador</code> is an object of the subclass <code>Dog</code>. However, <code>name</code> and <code>eat()</code> are members of the superclass <code>Animal</code>.
  </p>

  <p>
    Since <code>Dog</code> inherits the fields and methods from <code>Animal</code>, we are able to access them using an object of the <code>Dog</code> class.
  </p>

  <p>
    Therefore, the subclass <code>Dog</code> can access the fields and methods of the superclass <code>Animal</code>.
  </p>

  <h2>Java Inheritance and the is-a Relationship</h2>
  <p>
    In Java, inheritance represents an <strong>is-a</strong> relationship. That means we apply inheritance only when there is an "is-a" relationship between two classes.
  </p>

  <p>Examples:</p>
  <ul class="bullet-list">
    <li>Car is a Vehicle</li>
    <li>Orange is a Fruit</li>
    <li>Surgeon is a Doctor</li>
    <li>Dog is an Animal</li>
  </ul>

  <p>
    In each case, the subclass can inherit from the superclass based on the "is-a" relationship.
  </p>

  <h2>Method Overriding in Java Inheritance</h2>
  <p>
    In earlier examples, we saw how an object of the subclass can access methods of the superclass.
    But what if both the superclass and subclass contain the same method?
  </p>

  <p>
    In such cases, the method in the subclass <strong>overrides</strong> the method in the superclass. This is known as <strong>method overriding</strong> in Java.
  </p>

  <h3>Example: Method Overriding with Inheritance</h3>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">class Animal {

  // method in the superclass
  public void eat() {
    System.out.println("I can eat");
  }
}

// Dog inherits Animal
class Dog extends Animal {

  // overriding the eat() method
  @Override
  public void eat() {
    System.out.println("I eat dog food");
  }

  // new method in subclass
  public void bark() {
    System.out.println("I can bark");
  }
}

class Main {
  public static void main(String[] args) {

    // create an object of the subclass
    Dog labrador = new Dog();

    // call the eat() method
    labrador.eat();
    labrador.bark();
  }
}</pre>
  </div>

  <div class="output-box">
    <strong>Output:</strong><br>
    <ul class="style-output-other">
     <li> I eat dog food</li>
     <li> I can bark</li>
</ul>
  </div>
<div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>
  <p>
    In this example, the <code>Dog</code> class overrides the <code>eat()</code> method from the <code>Animal</code> class.
  </p>

  <p>
    When <code>eat()</code> is called using the <code>labrador</code> object of the <code>Dog</code> class, the overridden method in <code>Dog</code> is executed instead of the one in <code>Animal</code>.
  </p>

  <p>
    Additionally, <code>bark()</code> is a new method defined only in the <code>Dog</code> class, demonstrating that subclasses can have their own unique methods.
  </p>
</div>



<!---->

<div class="content-container">
  <h1>Method Overriding and the super Keyword in Java Inheritance</h1>

  <p>
    In the previous example, the <code>eat()</code> method is defined in both the superclass <code>Animal</code> and the subclass <code>Dog</code>.
  </p>

  <p>
    We created an object <code>labrador</code> of the <code>Dog</code> class. When we call <code>eat()</code> using this object, the version in <code>Dog</code> is executed.
  </p>

  <p>
    This is because the method in the subclass overrides the method in the superclass — a concept known as <strong>method overriding</strong>.
  </p>

  <p>
    <strong>Note:</strong> The <code>@Override</code> annotation is used to inform the compiler that the method is being overridden. While helpful, this annotation is optional.
    To learn more, refer to <a href="https://www.programiz.com/java-programming/method-overriding" target="_blank" rel="noopener noreferrer">Java Method Overriding</a>.
  </p>

  <h2>Using the <code>super</code> Keyword</h2>
  <p>
    In situations where a method is overridden in the subclass, we can still call the superclass version using the <code>super</code> keyword.
  </p>

  <p>
    This allows access to the parent class method even when it’s overridden in the child class.
  </p>

  <h3>Example: Using <code>super</code> in Method Overriding</h3>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">class Animal {

  // method in the superclass
  public void eat() {
    System.out.println("I can eat");
  }
}

// Dog inherits Animal
class Dog extends Animal {

  // overriding the eat() method
  @Override
  public void eat() {

    // call method of superclass
    super.eat();
    System.out.println("I eat dog food");
  }

  // new method in subclass
  public void bark() {
    System.out.println("I can bark");
  }
}

class Main {
  public static void main(String[] args) {

    // create an object of the subclass
    Dog labrador = new Dog();

    // call the eat() method
    labrador.eat();
    labrador.bark();
  }
}</pre>
  </div>

  <div class="output-box">
    <strong>Output:</strong><br>
    <ul class="style-output-other">
     <li>I can eat</li>
     <li>I eat dog food</li>
     <li>I can bark</li>
</ul>
  </div>

  <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>
  <p>
    In this example, the subclass <code>Dog</code> overrides the <code>eat()</code> method but also calls the superclass version using <code>super.eat()</code>.
  </p>

  <p>
    This allows both versions of the method to execute — first from <code>Animal</code> and then from <code>Dog</code>.
  </p>
</div>

<div class="reference-container">
  <h3>Reference</h3>
  <p>
    For more detailed explanation, visit:
    <a href="https://www.programiz.com/java-programming/inheritance" target="_blank" rel="noopener noreferrer">
      Programiz: Java Inheritance
    </a>
  </p>
</div>

<!---->

<div class="content-container">
  <h1>Protected Members and the <code>super</code> Keyword in Java Inheritance</h1>

  <p>
    In the previous example, the <code>eat()</code> method is present in both the base class <code>Animal</code> and the derived class <code>Dog</code>.
  </p>

  <p>
    Notice the use of <code>super.eat();</code> — this calls the <code>eat()</code> method from the superclass even though it is overridden in the subclass.
  </p>

  <p>
    <strong>Note:</strong> The <code>super</code> keyword can also be used to call the constructor of a superclass from the constructor of a subclass. To learn more, visit 
    <a href="https://www.programiz.com/java-programming/super-keyword" target="_blank" rel="noopener noreferrer">Java super keyword</a>.
  </p>

  <h2>Protected Members in Inheritance</h2>
  <p>
    In Java, when a class includes <code>protected</code> fields and methods, those members are accessible in its subclasses, even outside their own package (if using inheritance).
  </p>

  <h3>Example: Accessing Protected Members</h3>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">class Animal {
  protected String name;

  protected void display() {
    System.out.println("I am an animal.");
  }
}

class Dog extends Animal {

  public void getInfo() {
    System.out.println("My name is " + name);
  }
}

class Main {
  public static void main(String[] args) {

    // create an object of the subclass
    Dog labrador = new Dog();

    // access protected field and method
    // using the object of subclass
    labrador.name = "Rocky";
    labrador.display();

    labrador.getInfo();
  }
}</pre>
  </div>
  <div class="output-box">
    <strong>Output:</strong><br>
    <ul class="style-output-other">
     <li>I am an animal.</li>
      <li>My name is Rocky</li>
</ul>
  </div>
<div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>
  <p>
    In this example, the class <code>Animal</code> defines a protected field <code>name</code> and a protected method <code>display()</code>.
  </p>

  <p>
    Since the <code>Dog</code> class inherits <code>Animal</code>, it can access the <code>protected</code> members. Notice how we are able to call <code>labrador.display()</code> and access <code>labrador.name</code> directly.
  </p>
</div>

<div class="reference-container">
  <h3>Reference</h3>
  <p>
    For more details, visit:
    <a href="https://www.programiz.com/java-programming/inheritance" target="_blank" rel="noopener noreferrer">
      Programiz: Java Inheritance
    </a>
  </p>
</div>

<!---->

<div class="content-container">
  <h1>Why Use Inheritance in Java?</h1>

  <p>
    The most important advantage of using inheritance in Java is <strong>code reusability</strong>. 
    A child class can reuse fields and methods defined in the parent class without rewriting the same code.
  </p>

  <p>
    In addition to reusability, inheritance helps achieve <strong>runtime polymorphism</strong> via <strong>method overriding</strong>.
    This is a key concept in object-oriented programming and allows dynamic method dispatch.
  </p>

  <h2>Types of Inheritance in Java</h2>
  <p>
    Java supports different types of inheritance, each with its own structure and use case.
    Let’s explore the five main types:
  </p>

  <h3>1. Single Inheritance</h3>
  <p>
    In <strong>single inheritance</strong>, one subclass inherits from one superclass.
    <br><strong>Example:</strong> Class <code>A</code> inherits from class <code>B</code>.
  </p>
  <p><em>Structure:</em></p>
  <ul class="styled-box-output">
    <li>B → A</li>
  </ul>

  <h3>2. Multilevel Inheritance</h3>
  <p>
    In <strong>multilevel inheritance</strong>, a class inherits from another class, and that class is inherited by a third class.
    <br><strong>Example:</strong> Class <code>B</code> inherits from <code>A</code>, and class <code>C</code> inherits from <code>B</code>.
  </p>
  <p><em>Structure:</em></p>
  <ul class="styled-box-output">
    <li>A → B → C</li>
  </ul>

  <h3>3. Hierarchical Inheritance</h3>
  <p>
    In <strong>hierarchical inheritance</strong>, multiple subclasses inherit from a single superclass.
    <br><strong>Example:</strong> Both class <code>B</code> and class <code>C</code> inherit from class <code>A</code>.
  </p>
  <p><em>Structure:</em></p>
  <ul class="styled-box-output">
    <li>A → B</li>
    <li>A → C</li>
  </ul>

  <h3>4. Multiple Inheritance (using Interfaces)</h3>
  <p>
    In <strong>multiple inheritance</strong>, a subclass inherits from more than one superclass.
    <br><strong>Example:</strong> Class <code>C</code> inherits from both <code>A</code> and <code>B</code>.
  </p>

  <p><strong>Note:</strong> Java does <u>not</u> support multiple inheritance with classes to avoid ambiguity issues.
    However, Java supports multiple inheritance using <code>interfaces</code>.
    To learn more, visit 
    <a href="https://www.programiz.com/java-programming/interfaces" target="_blank" rel="noopener noreferrer">Java Interfaces</a>.
  </p>

  <h3>5. Hybrid Inheritance</h3>
  <p>
    <strong>Hybrid inheritance</strong> is a combination of two or more types of inheritance.
    <br><strong>Example:</strong> Class <code>B</code> and <code>C</code> inherit from <code>A</code>,
    and class <code>D</code> inherits from both <code>B</code> and <code>C</code>.
  </p>

  <p>
    This combines <strong>hierarchical</strong> and <strong>multiple</strong> inheritance to form a hybrid structure.
  </p>
</div>

<div class="reference-container">
  <h3>Reference</h3>
  <p>
    For more details, visit:
    <a href="https://www.programiz.com/java-programming/inheritance" target="_blank" rel="noopener noreferrer">
      Programiz: Java Inheritance
    </a>
  </p>
</div>
    `
  },
   
  classobject: {
    id: "classobject",
    title: "",
    description: `
     <div class="content-container">
  <h1>Introduction</h1>
  <p>
    Everything in Java is associated with classes and objects, along with its attributes and methods.
    Being an Object-oriented programming language, Java incorporates many of its features. Java deals with
    classes and objects, and their attributes and methods. Classes and objects are two crucial concepts that
    every programmer must learn. An object has behavior and states, and a class is a blueprint of an object.
    Class defines how the object will behave and what it will contain. In Java, classes and objects are basic
    concepts of Object Oriented Programming (OOPs) that are used to represent real-world concepts and entities.
    The class represents a group of objects having similar properties and behavior. For example, the animal type
    <code>Dog</code> is a class while a particular dog named Tommy is an object of the Dog class.
  </p>

  <h2>Java Class</h2>
  <p>
    A Java class is a blueprint or template used to create objects. It serves as a fundamental building block in
    Java programming, encapsulating data (fields) and behaviors (methods) into a single unit. You specify the attributes
    and behaviors that objects of that class will possess. The attributes, also known as fields or instance variables,
    represent the state or characteristics of objects. The behaviors, represented by methods, define the actions that
    objects can perform.
  </p>

  <p>
    Classes provide a way to model real-world entities or abstract concepts in software. They promote code organization,
    reusability, and maintainability by encapsulating related functionalities into cohesive units. Additionally, classes
    support features such as inheritance, polymorphism, and encapsulation, which are core principles of object-oriented
    programming.
  </p>

  <p>
    A Java class defines the structure and behavior of objects, serving as a blueprint for creating instances of that class.
    It plays a central role in object-oriented programming and facilitates the development of modular, scalable, and
    maintainable software systems.
  </p>

  <div class="styled-box">
    <strong>Example:</strong> <br>
    <ul class="style-output-other">
     <li> <code>Student</code> is a class while a particular student named <code>Ravi</code> is an object.</li>
    </ul>
   
  </div>
</div>
<!-- from https://www.geekster.in/articles/java-classes-and-object/ -->
<!-- syntax -->
<div class="content-container">
  <h1>Properties of Java Classes</h1>
  <p>
    A Java class serves as a blueprint for creating objects and doesn’t take up memory.
    It comprises variables of various types and methods. You can include data members, methods,
    constructors, nested classes, and interfaces within a class.
  </p>
  <p>
    It acts as a template for organizing and defining the behaviour of objects in your program.
  </p>

  <h2>Syntax of Java Classes</h2>
<!-- properties -->
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">
package com.example;

import java.util.ArrayList;

public class MyClass {
    private int age;

    public MyClass(int age) {
        this.age = age;
    }

    public void display() {
        System.out.println("Age: " + age);
    }
}
    </pre>
  </div>

  <div class="output-box">
    This syntax defines a class named <code>MyClass</code> in the <code>com.example</code> package, 
    with a private field <code>age</code>, a constructor that initializes <code>age</code>, and 
    a method <code>display()</code> to print the age.
  </div>
</div>
<!-- compontents -->
 <div class="content-container">
  <h1>Components of Java Class</h1>
  <p>
    In Java, a class serves as a blueprint for creating objects. It encapsulates data and behavior into a single unit.
    Here are the main components of a Java class:
  </p>

  <h3>Class Declaration</h3>
  <p>
    The class declaration defines the name of the class and any inheritance or interfaces it implements.
  </p>
  <div class="code-container">
    <pre class="code-block">
public class MyClass {
    // class body
}
    </pre>
  </div>

  <h3>Fields (Instance Variables)</h3>
  <p>
    Fields represent the state or attributes of objects created from the class.
  </p>
  <div class="code-container">
    <pre class="code-block">
private int age;
   </pre>
  </div>

  <h3>Constructors</h3>
  <p>
    Constructors initialize objects of the class. They have the same name as the class and are called when objects are created.
  </p>
  <div class="code-container">
    <pre class="code-block">
public MyClass(int age) {
    this.age = age;
}
   </pre>
  </div>

  <h3>Methods</h3>
  <p>
    Methods define the behavior or actions that objects of the class can perform.
  </p>
  <div class="code-container">
    <pre class="code-block">
public void display() {
    System.out.println("Age: " + age);
}
    </pre>
  </div>

  <h3>Access Modifiers</h3>
  <p>
    Access modifiers control the accessibility of class members (fields, constructors, methods).
  </p>
  <div class="code-container">
    <pre class="code-block">
public class MyClass {
    private int age;

    public MyClass(int age) {
        this.age = age;
    }

    public void display() {
        System.out.println("Age: " + age);
    }
}
    </pre>
  </div>

  <div class="output-box">
    These components collectively define the structure and behavior of a Java class, allowing for the creation
    of objects with specific characteristics and functionality.
  </div>
</div>

<!-- objects -->
 <div class="content-container">
  <h1>Java Objects</h1>
  <p>
    A Java object is an instance of a class. It represents a specific realization of the class blueprint, 
    with its own unique set of data values for the fields defined in the class.
  </p>
  <p>
    Objects are created using the <code>new</code> keyword followed by the class name, along with any required arguments 
    to initialize the object’s state. Each object created from a class has its own separate memory space allocated for 
    its fields, allowing it to maintain its own state independent of other objects created from the same class.
  </p>
  <p>
    Objects encapsulate both data (fields) and behavior (methods) into a single unit. They can interact with each other 
    by invoking methods and accessing fields. In essence, objects are the building blocks of object-oriented programming 
    in Java, allowing developers to model real-world entities and create modular, reusable, and maintainable software components.
  </p>

  <h3>An object consists of:</h3>
  <ul class="bullet-list">
    <li><strong>State:</strong> Represented by attributes of an object. It also reflects the properties of an object.</li>
    <li><strong>Behavior:</strong> Represented by the methods of an object. It also reflects the response of an object with other objects.</li>
    <li><strong>Identity:</strong> Gives a unique name to an object and enables one object to interact with other objects.</li>
  </ul>

  <img class="flow-img" src="https://articles.geekster.in/wp-content/uploads/2024/03/image-87-1.png" alt="Java Object Illustration">

  <div class="styled-box">
    <strong>Note:</strong> When we create an object which is a non-primitive data type, it’s always allocated on the heap memory.
  </div>

  <h3>Syntax of an Object</h3>
  <p>The syntax for creating an object in Java is:</p>
  <div class="code-container">
    <pre class="code-block">
ClassName objectName = new ClassName();
    </pre>
  </div>

  <p>For example:</p>
  <div class="code-container">
    <pre class="code-block">
Car myCar = new Car();
   </pre>
  </div>

  <div class="output-box">
    Here, <code>Car</code> is the class name, <code>myCar</code> is the object name, and <code>new Car()</code> 
    instantiates a new object of the <code>Car</code> class.
  </div>
</div>

<!-- initialize -->
 <div class="content-container">
  <h1>Initializing an Object</h1>
  <p>
    In Java, we can initialize objects in 3 ways:
  </p>
  <ul class="bullet-list">
    <li>By reference variable</li>
    <li>By method</li>
    <li>By constructor</li>
  </ul>

  <h3>By Reference Variable</h3>
  <p>
    Initialization of an object means storing the data in the object. Let us understand this with an example:
  </p>

  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">
public class MyClass {
    public static void main(String[] args) {
        // Initialize the object by reference variable in a single line
        MyClass myObject = new MyClass();
        
        // Access methods or fields of the object
        myObject.myMethod();
    }
    
    public void myMethod() {
        System.out.println("Object initialized successfully!");
    }
}
    </pre>
  </div>

  <div class="output-box">
    In this code, <code>myObject</code> is the reference variable. It is initialized using <code>new MyClass()</code>, 
    and then the <code>myMethod()</code> is called to display a message.
  </div>

  <h3>Anonymous Objects</h3>
  <p>
    An anonymous object is an object that is created without assigning it to a reference variable. It is typically used 
    for performing a single operation and is not intended to be reused.
  </p>
  <p>Here’s an example of creating and using an anonymous object:</p>

  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">
public class MyClass {
    public void showMessage(String message) {
        System.out.println("Message: " + message);
    }

    public static void main(String[] args) {
        // Creating and using an anonymous object
        new MyClass().showMessage("Hello, World!");

        // Another example with method chaining
        new MyClass().showMessage("Hello").showMessage("World");
    }
}
   </pre>
  </div>

  <div class="output-box">
    In this example, <code>new MyClass()</code> creates an anonymous object, immediately used to call the 
    <code>showMessage()</code> method. Anonymous objects are useful for short-lived, one-time-use operations.
  </div>
</div>
<!-- last -->
 <div class="content-container">
  <h2>Example: Java Class and Object</h2>
  <p>Here’s an example of a Java class and how to create an object from it:</p>

  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">
public class Car {
    // Attributes
    private String brand;
    private String model;
    private int year;

    // Constructor
    public Car(String brand, String model, int year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    // Method to display car details
    public void displayDetails() {
        System.out.println("Brand: " + brand);
        System.out.println("Model: " + model);
        System.out.println("Year: " + year);
    }

    public static void main(String[] args) {
        // Creating an object of Car class
        Car myCar = new Car("Toyota", "Camry", 2022);
        
        // Calling method to display car details
        myCar.displayDetails();
    }
}
   </pre>
  </div>

  <div class="output-box">
   <strong> Output</strong>:<br>
    <ul class="style-output-other">
     <li>Brand: Toyota</li>
     <li>Model: Camry</li>
     <li>Year: 2022</li>
     </ul>
  </div>

  <h2>Difference Between Java Classes and Objects</h2>

  <div class="code-block" style="overflow-x: auto;">
    <table style="width: 100%; border-collapse: collapse; font-size: 1rem;">
      <thead>
        <tr style="background-color: #e3f2fd;">
          <th style="padding: 10px; border: 1px solid #ccc;">Java Class</th>
          <th style="padding: 10px; border: 1px solid #ccc;">Java Object</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 10px; border: 1px solid #ccc;">A class is a blueprint or template for creating objects.</td>
          <td style="padding: 10px; border: 1px solid #ccc;">An object is an instance of a class created using the class definition.</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ccc;">It does not occupy memory until an object is created.</td>
          <td style="padding: 10px; border: 1px solid #ccc;">It occupies memory and has its own state and behavior.</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ccc;">Defines properties and behavior.</td>
          <td style="padding: 10px; border: 1px solid #ccc;">Uses defined properties and behavior to perform operations.</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ccc;">Declared using the <code>class</code> keyword.</td>
          <td style="padding: 10px; border: 1px solid #ccc;">Created using the <code>new</code> keyword.</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ccc;"><code>Car</code></td>
          <td style="padding: 10px; border: 1px solid #ccc;"><code>Car myCar = new Car();</code></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>


<!-- refernce -->

<div class="content-container">
  <h1>Rules for Creating a Java Class</h1>
  <p>To properly define a class in Java, you must follow a few important syntax and structure rules. These rules ensure consistency and avoid compilation errors in your Java program.</p>

  <ul class="styled-box-output">
    <li>The <code>class</code> keyword must be used to declare a class.</li>
    <li>The name of the class should start with an uppercase letter (as per Java naming conventions).</li>
    <li>You can include multiple classes in a single Java file, but only one public class is allowed.</li>
    <li>The file name must match the name of the public class and end with a <code>.java</code> extension.</li>
    <li>Java supports single inheritance; a class can inherit from only one superclass.</li>
  </ul>

  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">
public class Student {
    private String name;
    private int age;

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}
   </pre>
  </div>

  <div class="output-box">
   <strong> Output (if called in main):</strong><br>
   <ul class="style-output-other">
     <li>Name: Ravi</li>
     <li>Age: 20</li>
   </ul> 
  </div>

  <p>🔗 <strong>Reference:</strong> <a href="https://www.geekster.in/articles/java-classes-and-object/" target="_blank">Geekster - Java Classes and Object</a></p>
</div>

    `
  },
  
  constructor: {
    id: "constructor",
    title: "",
    description: `
      
<div class="content-container" id="java-constructors">
  <h1>Java Constructors</h1>
  <p>A constructor in Java is similar to a method that is invoked when an object of the class is created.</p>
  <p>Unlike Java methods, a constructor has the same name as that of the class and does not have any return type. For example:</p>

  <div class="code-container">
    <pre class="code-block">
class Test {
  Test() {
    // constructor body
  }
}
   </pre>
   
  </div>

  <p>Here, <code>Test()</code> is a constructor. It has the same name as that of the class and doesn't have a return type.</p>

  <h3>Example: Java Constructor</h3>

  <div class="code-container">
    <pre class="code-block">
class Main {
  private String name;

  // constructor
  Main() {
    System.out.println("Constructor Called:");
    name = "Booster";
  }

  public static void main(String[] args) {
    // constructor is invoked while
    // creating an object of the Main class
    Main obj = new Main();
    System.out.println("The name is " + obj.name);
  }
}
   </pre>
    <button class="copy-btn" onclick="copyCode(this)">Copy</button>
  </div>

  <div class="output-box">
    <strong>Output:</strong><br>
    <ul class="style-output-other">
     <li>Constructor Called:</li>
     <li>The name is Booster</li>
    </ul>
  
  </div>
 <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>
  <p>In the above example, we have created a constructor named <code>Main()</code>.</p>
  <p>Inside the constructor, we are initializing the value of the <code>name</code> variable.</p>
  <p>Notice the statement creating an object of the <code>Main</code> class:</p>

  <div class="code-container">
  
   <pre> obj = new Main();</pre> 
  
 
  </div>

  <p>Here, when the object is created, the <code>Main()</code> constructor is called. And the value of the <code>name</code> variable is initialized.</p>
  <p>Hence, the program prints the value of the <code>name</code> variable as <strong>Programiz</strong>.</p>

  <h3>Types of Constructor</h3>
  <ul class="styled-box-output">
    <li><strong>No-Arg Constructor</strong></li>
    <li><strong>Parameterized Constructor</strong></li>
    <li><strong>Default Constructor</strong></li>
  </ul>
</div>

<!-- part-2 -->
<div class="content-container" id="java-no-arg-constructors">
  <h1>Java No-Arg Constructors</h1>
  <p>Similar to methods, a Java constructor may or may not have any parameters (arguments).</p>
  <p>If a constructor does not accept any parameters, it is known as a no-argument constructor. For example,</p>

  <div class="code-container">
    <pre class="code-block">
private Constructor() {
   // body of the constructor
}
    </pre>
    
  </div>

  <h3>Example: Java Private No-arg Constructor</h3>

  <div class="code-container">
    <pre class="code-block">
class Main {

  int i;

  // constructor with no parameter
  private Main() {
    i = 5;
    System.out.println("Constructor is called");
  }

  public static void main(String[] args) {

    // calling the constructor without any parameter
    Main obj = new Main();
    System.out.println("Value of i: " + obj.i);
  }
}
    </pre>
     <button class="copy-btn" onclick="copyCode(this)">Copy</button>
  
  </div>

  <div class="output-box">
    <strong>Output:</strong><br>
    <ul class="style-output-other">
     <li>Constructor is called</li>
    <li>Value of i: 5</li>
</ul>
  </div>

   <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>

  <p>In the above example, we have created a constructor <code>Main()</code>.</p>
  <p>Here, the constructor does not accept any parameters. Hence, it is known as a no-arg constructor.</p>
  <p>Notice that we have declared the constructor as <strong>private</strong>.</p>
  <p>Once a constructor is declared private, it cannot be accessed from outside the class.</p>
  <p>So, creating objects from outside the class is prohibited using the private constructor.</p>
  <p>Here, we are creating the object inside the same class.</p>
  <p>Hence, the program is able to access the constructor. To learn more, visit <a href="https://www.geekster.in/articles/java-implement-private-constructor/" target="_blank" rel="noopener noreferrer">Java Implement Private Constructor</a>.</p>

  <h3>However, if we want to create objects outside the class, then we need to declare the constructor as public.</h3>

  <h3>Example: Java Public No-arg Constructors</h3>

  <div class="code-container">
    <pre class="code-block">
class Company {
  String name;

  // public constructor
  public Company() {
    name = "Booster";
  }
}

class Main {
  public static void main(String[] args) {

    // object is created in another class
    Company obj = new Company();
    System.out.println("Company name = " + obj.name);
  }
}
   </pre>
    <button class="copy-btn" onclick="copyCode(this)">Copy</button>
  </div>

  <div class="output-box">
    <strong>Output:</strong><br>
    Company name = Booster
  </div>
</div>

<!-- part-3 -->
<div class="content-container" id="java-parameterized-constructor">
  <h1>Java Parameterized Constructor</h1>
  <p>A Java constructor can also accept one or more parameters. Such constructors are known as parameterized constructors (constructors with parameters).</p>

  <h3>Example: Parameterized Constructor</h3>

  <div class="code-container">
    <pre class="code-block">
class Main {

  String languages;

  // constructor accepting single value
  Main(String lang) {
    languages = lang;
    System.out.println(languages + " Programming Language");
  }

  public static void main(String[] args) {

    // call constructor by passing a single value
    Main obj1 = new Main("Java");
    Main obj2 = new Main("Python");
    Main obj3 = new Main("C");
  }
}
    </pre>
    <button class="copy-btn" onclick="copyCode(this)">Copy</button>
  </div>

  <div class="output-box">
    <strong>Output:</strong><br>
    <ul class="style-output-other">
     <li>Java Programming Language</li>
     <li>Python Programming Language</li>
     <li>C Programming Language</li>
</ul>
  </div>

  <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>

  <p>In the above example, we have created a constructor named <code>Main()</code>.</p>
  <p>Here, the constructor takes a single parameter. Notice the expression:</p>
  <pre class="inline-code">Main obj1 = new Main("Java");</pre>
  <p>Here, we are passing the single value to the constructor.</p>
  <p>Based on the argument passed, the <code>languages</code> variable is initialized inside the constructor.</p>
</div>
<!-- part 4 -->
 <div class="content-container" id="java-default-constructor">
  <h1>Java Default Constructor</h1>
  <p>If we do not create any constructor, the Java compiler automatically creates a no-arg constructor during the execution of the program.</p>
  <p>This constructor is called the default constructor.</p>

  <h3>Example: Default Constructor</h3>

  <div class="code-container">
    <pre class="code-block">
class Main {

  int a;
  boolean b;

  public static void main(String[] args) {

    // calls default constructor
    Main obj = new Main();

    System.out.println("Default Value:");
    System.out.println("a = " + obj.a);
    System.out.println("b = " + obj.b);
  }
}
  </pre>
    <button class="copy-btn" onclick="copyCode(this)">Copy</button>
  </div>

  <div class="output-box">
    <strong>Output:</strong><br>
    <ul class="style-output-other">
     <li>Default Value:</li>
     <li>a = 0</li>
     <li>b = false</li>
</ul>
  </div>

   <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>

  <p>Here, we haven't created any constructors.</p>
  <p>Hence, the Java compiler automatically creates the default constructor.</p>
  <p>The default constructor initializes any uninitialized instance variables with default values.</p>
<table class="styled-table" style="width: 100%; border-collapse: collapse; margin-top: 1rem; font-size: 1rem; max-width: 600px;">
  <thead>
    <tr style="background-color: #e3f2fd;">
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Type</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Default Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">boolean</td>
      <td style="padding: 8px; border: 1px solid #ddd;">false</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">byte</td>
      <td style="padding: 8px; border: 1px solid #ddd;">0</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">short</td>
      <td style="padding: 8px; border: 1px solid #ddd;">0</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">int</td>
      <td style="padding: 8px; border: 1px solid #ddd;">0</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">long</td>
      <td style="padding: 8px; border: 1px solid #ddd;">0L</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">char</td>
      <td style="padding: 8px; border: 1px solid #ddd;">\u0000</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">float</td>
      <td style="padding: 8px; border: 1px solid #ddd;">0.0f</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">double</td>
      <td style="padding: 8px; border: 1px solid #ddd;">0.0d</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">object</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Reference null</td>
    </tr>
  </tbody>
</table>

  <p>To learn more, visit <a href="https://www.geekster.in/articles/java-data-types/" target="_blank" rel="noopener noreferrer">Java Data Types</a>.</p>

  <p>In the above program, the variables <code>a</code> and <code>b</code> are initialized with default values <code>0</code> and <code>false</code> respectively.</p>

  <p>The above program is equivalent to:</p>

  <div class="code-container">
    <pre class="code-block">
class Main {

  int a;
  boolean b;

  Main() {
    a = 0;
    b = false;
  }

  public static void main(String[] args) {
    // call the constructor
    Main obj = new Main();

    System.out.println("Default Value:");
    System.out.println("a = " + obj.a);
    System.out.println("b = " + obj.b);
  }
}
   </pre>
    <button class="copy-btn" onclick="copyCode(this)">Copy</button>
  </div>

  <div class="output-box">
    <strong>Output:</strong><br>
   <ul class="style-output-other">
     <li>Default Value:</li>
     <li>a = 0</li>
     <li>b = false</li>
</ul>
  </div>

   <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>
</div>
<!-- part 5 -->
<div class="content-container" id="important-notes-java-constructors">
  <h1>Important Notes on Java Constructors</h1>
  
  <ul class="styled-box-output">
    <li>Constructors are invoked implicitly when you instantiate objects.</li>
    <li>The two rules for creating a constructor are:
      <ol>
        <li>The name of the constructor should be the same as the class.</li>
        <li>A Java constructor must not have a return type.</li>
      </ol>
    </li>
    <li>If a class doesn't have a constructor, the Java compiler automatically creates a default constructor during run-time. The default constructor initializes instance variables with default values. For example, the <code>int</code> variable will be initialized to <code>0</code>.</li>
  </ul>

  <p><strong>Constructor types:</strong></p>
  <ul class="styled-box-output">
    <li><strong>No-Arg Constructor</strong> - a constructor that does not accept any arguments</li>
    <li><strong>Parameterized Constructor</strong> - a constructor that accepts arguments</li>
    <li><strong>Default Constructor</strong> - a constructor automatically created by the Java compiler if it is not explicitly defined</li>
  </ul>

  <p>A constructor <strong>cannot</strong> be <code>abstract</code>, <code>static</code>, or <code>final</code>.</p>
  <p>A constructor can be <strong>overloaded</strong> but <strong>cannot</strong> be overridden.</p>

  <p>Learn more at <a href="https://www.programiz.com/java-programming/constructors" target="_blank" rel="noopener noreferrer">Programiz: Java Classes and Object</a>.</p>
</div>
<!-- part-6 -->
  <div class="content-container" id="constructors-overloading-java">
  <h1>Constructors Overloading in Java</h1>
  <p>Similar to Java method overloading, we can also create two or more constructors with different parameters. This is called constructor overloading.</p>

  <p><strong>Example: Java Constructor Overloading</strong></p>
  
 <div class="code-container">
  <pre class="code-block">
class Main {

  String language;

  // constructor with no parameter
  Main() {
    this.language = "Booster";
  }

  // constructor with a single parameter
  Main(String language) {
    this.language = language;
  }

  public void getName() {
    System.out.println("Programming Language: " + this.language);
  }

  public static void main(String[] args) {

    // call constructor with no parameter
    Main obj1 = new Main();

    // call constructor with a single parameter
    Main obj2 = new Main("Python");

    obj1.getName();
    obj2.getName();
  }
}
  </pre>
  <button class="copy-btn" onclick="copyCode(this)">Copy</button>
</div>

<div class="output-box">
  <strong>Output:</strong><br>
  <ul class="style-output-other">
    <li>Programming Language: Booster</li>
    <li>Programming Language: Python</li>
  </ul>
</div>


  <p>In the above example, we have two constructors: <code>Main()</code> and <code>Main(String language)</code>.</p>
  <p>Here, both the constructors initialize the value of the variable <code>language</code> with different values.</p>
  <p>Based on the parameter passed during object creation, different constructors are called, and different values are assigned.</p>

  <p>It is also possible to call one constructor from another constructor. To learn more, visit <a href="https://www.geekster.in/articles/java-classes-and-object/" target="_blank" rel="noopener noreferrer">Java Call One Constructor from Another</a>.</p>

  <p><strong>Note:</strong> We have used the <code>this</code> keyword to specify the variable of the class. To know more about this keyword, visit <a href="https://www.geekster.in/articles/java-classes-and-object/" target="_blank" rel="noopener noreferrer">Java this keyword</a>.</p>
</div>
    `
  },
   methodoverriding: {
    id: "methodoverriding",
    title: "",
    description: `
      <div class="content-container">
  <h1 >Java Method Overriding</h1>

  <p>
    Now, if the same method is defined in both the superclass and the subclass, then the method of the subclass class overrides the method of the superclass. This is known as method overriding.
  </p>

  <h3>Example 1: Method Overriding</h3>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">class Animal {
   public void displayInfo() {
      System.out.println("I am an animal.");
   }
}

class Dog extends Animal {
   @Override
   public void displayInfo() {
      System.out.println("I am a dog.");
   }
}

class Main {
   public static void main(String[] args) {
      Dog d1 = new Dog();
      d1.displayInfo();
   }
}</pre>
  </div>

  <div class="output-box">
    <strong>Output:</strong><br>
    <ul class="style-output-other">
     <li>I am a dog.</li>
    </ul>
  </div>
<div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>
  <p>
    In the above program, the <code>displayInfo()</code> method is present in both the <code>Animal</code> superclass and the <code>Dog</code> subclass.
  </p>

  <p>
    When we call <code>displayInfo()</code> using the <code>d1</code> object (object of the subclass), the method inside the subclass <code>Dog</code> is called. The <code>displayInfo()</code> method of the subclass overrides the same method of the superclass.
  </p>

  <p>
    Notice the use of the <code>@Override</code> annotation in our example. In Java, annotations are metadata used to provide information to the compiler. Here, the <code>@Override</code> annotation specifies to the compiler that the method after this annotation overrides the method of the superclass.
  </p>

  <p>
    It is not mandatory to use <code>@Override</code>. However, when we use it, the method should follow all the rules of overriding. Otherwise, the compiler will generate an error.
  </p>

  <h3>Java Overriding Rules</h3>
  <ul class="bullet-list">
    <li>Both the superclass and the subclass must have the same method name, the same return type, and the same parameter list.</li>
    <li>We cannot override the method declared as <code>final</code> and <code>static</code>.</li>
    <li>We should always override abstract methods of the superclass (will be discussed in later tutorials).</li>
  </ul>
</div>
<!-- part 2 -->
<div class="content-container">
  <h1>super Keyword in Java Overriding</h1>

  <p>
    A common question that arises while performing overriding in Java is:
  </p>

  <p><em>Can we access the method of the superclass after overriding?</em></p>

  <p>
    Well, the answer is <strong>Yes.</strong> To access the method of the superclass from the subclass, we use the <code>super</code> keyword.
  </p>

  <h3>Example 2: Use of super Keyword</h3>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">class Animal {
   public void displayInfo() {
      System.out.println("I am an animal.");
   }
}

class Dog extends Animal {
   public void displayInfo() {
      super.displayInfo();
      System.out.println("I am a dog.");
   }
}

class Main {
   public static void main(String[] args) {
      Dog d1 = new Dog();
      d1.displayInfo();
   }
}</pre>
  </div>

  <div class="output-box">
    <strong>Output:</strong><br>
    <ul class="style-output-other">
     <li>I am an animal.</li>
     <li>I am a dog.</li>
</ul>  
  </div>

  <p>
    In the above example, the subclass <code>Dog</code> overrides the method <code>displayInfo()</code> of the superclass <code>Animal</code>.
  </p>

  <p>
    When we call the method <code>displayInfo()</code> using the <code>d1</code> object of the <code>Dog</code> subclass, the method inside the <code>Dog</code> subclass is called; the method inside the superclass is not called.
  </p>

  <p>
    Inside <code>displayInfo()</code> of the <code>Dog</code> subclass, we have used <code>super.displayInfo()</code> to call <code>displayInfo()</code> of the superclass.
  </p>

  <p>
    It is important to note that constructors in Java are not inherited. Hence, there is no such thing as constructor overriding in Java.
  </p>

  <p>
    However, we can call the constructor of the superclass from its subclasses. For that, we use <code>super()</code>. To learn more, visit Java super keyword.
  </p>
</div>
<!-- part 3 -->
<div class="content-container">
  <h1>Access Specifiers in Method Overriding</h1>

  <p>
    The same method declared in the superclass and its subclasses can have different access specifiers. However, there is a restriction.
  </p>

  <p>
    We can only use those access specifiers in subclasses that provide <strong>larger access</strong> than the access specifier of the superclass. For example,
  </p>

  <p>
    Suppose a method <code>myClass()</code> in the superclass is declared <code>protected</code>. Then, the same method <code>myClass()</code> in the subclass can be either <code>public</code> or <code>protected</code>, but <strong>not private</strong>.
  </p>

  <h3>Example 3: Access Specifier in Overriding</h3>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">class Animal {
   protected void displayInfo() {
      System.out.println("I am an animal.");
   }
}

class Dog extends Animal {
   public void displayInfo() {
      System.out.println("I am a dog.");
   }
}

class Main {
   public static void main(String[] args) {
      Dog d1 = new Dog();
      d1.displayInfo();
   }
}</pre>
  </div>

  <div class="output-box">
    <strong>Output:</strong><br>
    <ul class="style-output-other">
     <li>I am a dog.</li>
</ul>
  </div>
  <p>
    In the above example, the subclass <code>Dog</code> overrides the method <code>displayInfo()</code> of the superclass <code>Animal</code>.
  </p>

  <p>
    Whenever we call <code>displayInfo()</code> using the <code>d1</code> (object of the subclass), the method inside the subclass is called.
  </p>

  <p>
    Notice that <code>displayInfo()</code> is declared <code>protected</code> in the <code>Animal</code> superclass. The same method has the <code>public</code> access specifier in the <code>Dog</code> subclass. This is possible because <code>public</code> provides larger access than <code>protected</code>.
  </p>
</div>
<!-- part 4 -->
<div class="reference-container">
  <h3>Reference</h3>
  <p class="style-output-other"
>
    For more detailed explanations and examples, visit the original article on
    <a href="https://www.programiz.com/java-programming/method-overriding" target="_blank" rel="noopener noreferrer">
      Programiz: Java Method Overriding
    </a>.
  </p>
</div>
    `
  },
    encapsulation: {
    id: "encapsulation",
    title: "",
    description: `
      <!--encapsulation-->

<div class="content-container">
  <h1>Encapsulation in Java</h1>

  <p>
    Encapsulation is one of the core concepts of Object-Oriented Programming (OOP) in Java.
    It binds data members and methods into a single unit, typically a class, and hides the implementation details to show only functionality.
  </p>

  <p>
    Encapsulation helps improve code readability, usability, and security by controlling access to the internal state of an object.
  </p>

  <h2>Key Benefits of Encapsulation</h2>
  <ul class="styled-box-output">
    <li><strong>Better Code Management:</strong> You can change the internal implementation without affecting other code using the class, as long as method signatures remain the same.</li>
    <li><strong>Simpler Parameter Passing:</strong> Passing an object passes all its data and methods together, so you don’t need to pass individual members.</li>
    <li><strong>Getter and Setter Methods:</strong> These methods allow controlled access to private fields. The user can get or modify data using these methods, but cannot access the fields directly.</li>
  </ul>

  <h3>Example: Encapsulation in Java</h3>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">// Java program demonstrating Encapsulation
class Programmer {
    
    private String name;

    // Getter method to access the private data
    public String getName() {
        return name;
    }

    // Setter method to modify the private data
    public void setName(String name) {
        this.name = name;
    }
}

public class Geeks {
    public static void main(String[] args) {
        Programmer p = new Programmer();

        // Set the name using setter
        p.setName("Booster");

        // Get the name using getter
        System.out.println("Name => " + p.getName());
    }
}
</pre>
  </div>

  <div class="output-box">
    <strong>Output:</strong><br>
    <ul class="style-output-other">
     <li> Name => Booster</li>
</ul>
  </div>
   <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>

  <p>
    In this example, the <code>Programmer</code> class encapsulates the <code>name</code> field by making it private.
    Access to this field is controlled using the public <code>getName()</code> and <code>setName()</code> methods,
    protecting the internal state while providing flexibility in accessing and modifying the data.
  </p>
</div>

<!---->
<div class="content-container">
  <h1>Uses and Implementation of Encapsulation in Java</h1>

  <h2>Uses of Encapsulation</h2>
  <p>Using encapsulation in Java provides several important benefits:</p>
  <ul>
    <li><strong>Data Hiding:</strong> Internal data of an object is hidden from the outside world, preventing direct access.</li>
    <li><strong>Data Integrity:</strong> Only validated or safe values can be assigned to an object's attributes via setter methods.</li>
    <li><strong>Reusability:</strong> Encapsulated code is more flexible and reusable for future modifications or requirements.</li>
    <li><strong>Security:</strong> Sensitive data is protected because it cannot be accessed directly.</li>
  </ul>

  <p>
    The image below demonstrates encapsulation as a capsule that hides internal data (variables) and exposes a controlled interface.
  </p>
  <!-- Placeholder for image -->
  <div style="text-align:center; margin: 1rem 0;">
    <img src="https://media.geeksforgeeks.org/wp-content/uploads/Encapsulation.jpg" alt="Encapsulation Concept" style="max-width:100%; height:auto;">
  </div>

  <h2>Implementation of Encapsulation</h2>
  <p>
    In Java, encapsulation is implemented by declaring instance variables as <code>private</code>, restricting direct access.
    Public getter methods retrieve the variable values, while setter methods modify them, allowing controlled access.
  </p>

  <p>
    This mechanism allows a class to enforce data validation and maintain a consistent internal state, improving security and flexibility.
    Encapsulation is essentially wrapping data and code together into a single unit and protecting that data from outside interference.
  </p>

  <p>
    Variables or data of a class are hidden from other classes and accessed only through member functions of their own class.
    By declaring variables as <code>private</code> and providing <code>public</code> getter and setter methods, encapsulation is achieved.
  </p>

  <h3>Example: Encapsulation in Java</h3>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">// Java program demonstrating Encapsulation
class Person {
    
    // Encapsulated private fields
    private String name;
    private int age;

    // Getter for name
    public String getName() {
        return name;
    }

    // Setter for name
    public void setName(String name) {
        this.name = name;
    }

    // Getter for age
    public int getAge() {
        return age;
    }

    // Setter for age
    public void setAge(int age) {
        this.age = age;
    }
}

// Driver class
public class Geeks {
    public static void main(String[] args) {
        // Create Person object
        Person p = new Person();
        p.setName("Sweta");
        p.setAge(25);

        // Access fields via getters
        System.out.println("Name: " + p.getName());
        System.out.println("Age: " + p.getAge());
    }
}
</pre>
  </div>

  <div class="output-box">
    <strong>Output:</strong><br>
    <ul class="style-output-other">
     <li> Name: Sweta</li>
     <li>Age: 25</li>
</ul>
  </div>
 <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>
  <p>
    In this example, the <code>Person</code> class hides its <code>name</code> and <code>age</code> fields by declaring them <code>private</code>.
    These fields can only be accessed or modified through public getter and setter methods, ensuring data hiding and control over data values.
  </p>
</div>

<!---->

<div class="content-container">
  <h1>Example 2: Using Abstraction to Hide Implementation</h1>

  <p>
    In this example, abstraction is used to hide the implementation details and only expose the functionality.
  </p>

  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">class Area {
    private int l; // stores length
    private int b; // stores breadth

    // constructor to initialize length and breadth
    Area(int l, int b) {
        this.l = l;
        this.b = b;
    }

    // method to calculate and display area
    public void getArea() {
        int area = l * b;
        System.out.println("Area: " + area);
    }
}

public class Geeks {
    public static void main(String[] args) {
        Area rect = new Area(2, 16);
        rect.getArea();
    }
}</pre>
  </div>

  <div class="output-box">
    <strong>Output:</strong><br>
    <ul class="style-output-other">
     <li> Area: 32</li>
</ul>
  </div>
<div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>
  <p>
    Explanation: The <code>Area</code> class uses a constructor to initialize length (<code>l</code>) and breadth (<code>b</code>). The <code>getArea()</code> method calculates and displays the area. This method hides the calculation logic (implementation) and only shows the functionality (area output), demonstrating abstraction.
  </p>
</div>

<div class="content-container">
  <h1>Example 3: Java Encapsulation with Getter and Setter Methods</h1>

  <p>
    This example demonstrates encapsulation by keeping variables private and accessing them only through public getter and setter methods.
  </p>

  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">// Java program demonstrating encapsulation

class Encapsulate {
    // private variables
    private String geekName;
    private int geekRoll;
    private int geekAge;

    // getter for age
    public int getAge() { return geekAge; }

    // getter for name
    public String getName() { return geekName; }

    // getter for roll
    public int getRoll() { return geekRoll; }

    // setter for age
    public void setAge(int newAge) { geekAge = newAge; }

    // setter for name
    public void setName(String newName) { geekName = newName; }

    // setter for roll
    public void setRoll(int newRoll) { geekRoll = newRoll; }
}

public class Geeks {
    public static void main(String[] args) {
        Encapsulate o = new Encapsulate();

        // setting values
        o.setName("Boost");
        o.setAge(19);
        o.setRoll(51);

        // displaying values
        System.out.println("name: " + o.getName());
        System.out.println("age: " + o.getAge());
        System.out.println("roll: " + o.getRoll());

        // Direct access to variables is not possible:
        // System.out.println(o.geekName); // Error due to encapsulation
    }
}</pre>
  </div>

  <div class="output-box">
    <strong>Output:</strong><br>
    <ul class="style-output-other">
     <li>name: Boost</li>
      <li>age: 19</li>
       <li>roll: 51</li>
</ul>
  </div>
  <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>

  <p>
    Explanation: In the <code>Encapsulate</code> class, all variables are declared <code>private</code> and cannot be accessed directly from outside the class. Public getter and setter methods allow controlled access and modification of these variables, ensuring data hiding and integrity through encapsulation.
  </p>
</div>


<!---->
<div class="content-container">
  <h1>Example 4: Java Encapsulation Demonstration</h1>

  <p>
    Let’s explore another example to better understand encapsulation in Java.
  </p>

  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">// Java Program demonstrating Encapsulation
class Account {

    // Private data members (encapsulated)
    private long accNo;      // Account number
    private String name;
    private String email;
    private float amount;

    // Public getter and setter methods (controlled access)
    public long getAccNo() { return accNo; }
    public void setAccNo(long accNo) { this.accNo = accNo; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public float getAmount() { return amount; }
    public void setAmount(float amount) { this.amount = amount; }
}

// Main Class
public class Geeks {
    public static void main(String[] args) {
        // Create an Account object
        Account acc = new Account();

        // Set values using setter methods (controlled access)
        acc.setAccNo(90482098491L);
        acc.setName("ABC");
        acc.setEmail("abc@gmail.com");
        acc.setAmount(100000f);

        // Get values using getter methods
        System.out.println("Account Number: " + acc.getAccNo());
        System.out.println("Name: " + acc.getName());
        System.out.println("Email: " + acc.getEmail());
        System.out.println("Amount: " + acc.getAmount());
    }
}
</pre>
  </div>

  <div class="output-box">
    <strong>Output:</strong><br>
    <ul class="style-output-other">
     <li>Account Number: 90482098491</li>
     <li> Name: ABC</li>
     <li>Email: abc@gmail.com</li>
     <li>Amount: 100000.0</li>
</ul>
  </div>
 <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>
  <p>
    Explanation: All details inside the <code>Account</code> class are hidden by declaring the variables <code>private</code>. We access and modify these variables only via public getter and setter methods. This controlled access ensures data hiding and encapsulation. In the <code>main</code> method, an <code>Account</code> object is created and values are set and retrieved through these methods.
  </p>
</div>

<div class="content-container">
  <h1>Advantages of Encapsulation</h1>
  <ul class="styled-box-output">
    <li><strong>Data Hiding:</strong> Internal details of a class are hidden from outside, providing controlled access through setter methods.</li>
    <li><strong>Data Integrity:</strong> Setter and getter methods ensure that only valid data is assigned and retrieved.</li>
    <li><strong>Reusability:</strong> Encapsulation increases code readability and makes modifying or adding new features easier.</li>
    <li><strong>Ease of Testing:</strong> Encapsulated code is easier to test during unit testing.</li>
    <li><strong>Implementation Freedom:</strong> Programmers can freely change internal implementation as long as the external interface remains consistent.</li>
  </ul>
</div>

<div class="content-container">
  <h1>Disadvantages of Encapsulation</h1>
  <ul class="styled-box-output">
    <li>Improper use can make code complex and harder to understand.</li>
    <li>Hiding parts of the program can sometimes make understanding overall flow difficult.</li>
  </ul>
</div>

<div class="content-container">
  <h1>Common Mistakes to Avoid</h1>
  <ul class="styled-box-output">
    <li><strong>Exposing Internal Data Directly:</strong> Avoid accessing or modifying class variables directly without getter/setter methods, as this breaks encapsulation.</li>
    <li><strong>Incorrect Access Modifiers:</strong> Wrong use of access modifiers may allow unauthorized data access.</li>
    <li><strong>Overusing Public Methods:</strong> Only necessary methods should be public to keep data safe.</li>
    <li><strong>Not Validating Input:</strong> Always validate data in setter methods to prevent invalid or harmful data.</li>
  </ul>
</div>

<div class="content-container">
  <h1>Best Practices</h1>
  <ul class="styled-box-output">
    <li>Declare class variables <code>private</code> to restrict direct access.</li>
    <li>Use getter methods to retrieve variable values and setter methods to modify them.</li>
    <li>Use proper access modifiers to control visibility.</li>
    <li>Always validate data inside setter methods before assigning.</li>
  </ul>
</div>

    `
  },
    AbstractClassMethods: {
    id: "AbstractClassMethods",
    title: "",
    description: `
      <!--abstract class & abstract methods-->
<div class="content-container">
  <h1>Java Abstract Class and Abstract Methods</h1>

  <h2>Java Abstract Class</h2>
  <p>
    An abstract class in Java is a class that cannot be instantiated, meaning we cannot create objects of abstract classes directly. The <code>abstract</code> keyword is used to declare an abstract class.
  </p>

  <div class="code-container">
    <pre class="code-block">// Create an abstract class
abstract class Language {
  // fields and methods
}

// Try to create an object of Language
// This will throw an error
Language obj = new Language();</pre>
  </div>

  <p>
    Attempting to create an object of an abstract class will result in a compile-time error because abstract classes are incomplete by design and meant to be extended.
  </p>

  <h2>Abstract Class with Methods</h2>
  <p>
    An abstract class can contain both abstract methods (without implementation) and regular methods (with implementation).
  </p>

  <div class="code-container">
   <pre class="code-block">abstract class Language {

  // Abstract method (no body)
  abstract void method1();

  // Regular method (with body)
  void method2() {
    System.out.println("This is regular method");
  }
}</pre>
  </div>

  <p>
    In the example above:
    <ul class="styled-box-output">
      <li><code>method1()</code> is an <strong>abstract method</strong> and must be implemented by subclasses.</li>
      <li><code>method2()</code> is a <strong>regular method</strong> with its own implementation and can be used directly or overridden.</li>
    </ul>
  </p>
  </div>

<!---->
  <div class="content-container">
  <h1>Java Abstract Method</h1>

  <h2>What is an Abstract Method?</h2>
  <p>
    A method that does not have a body is known as an <strong>abstract method</strong>. It is declared using the <code>abstract</code> keyword. The method signature ends with a semicolon (<code>;</code>) instead of a body.
  </p>

  <div class="code-container">
    <pre class="code-block">abstract void display();</pre>
  </div>

  <p>
    In the above example, <code>display()</code> is an abstract method. Since it has no body, it must be implemented by a subclass.
  </p>

  <h2>Abstract Method Rule</h2>
  <p>
    If a class contains one or more abstract methods, the class itself must also be declared as abstract. Otherwise, it will result in a compile-time error.
  </p>

  <div class="code-container">
    <pre class="code-block">// Error: class should be abstract
class Language {

  // abstract method
  abstract void method1();
}</pre>
  </div>

  <h2>Example: Java Abstract Class and Method</h2>
  <p>
    Though abstract classes cannot be instantiated, we can create subclasses that extend them. We can then access members of the abstract class using the subclass object.
  </p>

  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">abstract class Language {

  // method of abstract class
  public void display() {
    System.out.println("This is Java Programming");
  }
}

class Main extends Language {

  public static void main(String[] args) {
    
    // create an object of Main
    Main obj = new Main();

    // access method of abstract class
    // using object of Main class
    obj.display();
  }
}</pre>
  </div>

  <h3>Output:</h3>
  <div class="output-box">
    This is Java Programming
  </div>
<div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>
  <h3>Explanation:</h3>
  <p>
    In the above example:
  </p>
  <ul class="styled-box-output">
    <li><strong>Language</strong> is an abstract class that contains a regular method <code>display()</code>.</li>
    <li><strong>Main</strong> is a subclass that extends <code>Language</code>.</li>
    <li>We create an object <code>obj</code> of <code>Main</code> and call the <code>display()</code> method, which is inherited from the abstract class.</li>
  </ul>
</div>

<!---->

<div class="content-container">
  <h1>Implementing Abstract Methods</h1>

  <h2>What Happens If an Abstract Method Exists?</h2>
  <p>
    If an abstract class includes any abstract method, then all its subclasses must provide an implementation for that abstract method. Otherwise, the subclass must also be declared as abstract.
  </p>

  <h2>Example: Implementing Abstract Method in Subclass</h2>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">abstract class Animal {
  abstract void makeSound();

  public void eat() {
    System.out.println("I can eat.");
  }
}

class Dog extends Animal {

  // provide implementation of abstract method
  public void makeSound() {
    System.out.println("Bark bark");
  }
}

class Main {
  public static void main(String[] args) {

    // create an object of Dog class
    Dog d1 = new Dog();

    d1.makeSound();
    d1.eat();
  }
}</pre>

</div>

  <h3>Output:</h3>
  <div class="output-box">
    Bark bark<br>
    I can eat.
  </div>

  <h3>Explanation:</h3>
  <p>
    In this example:
  </p>
  <ul class="styled-box-output">
    <li><code>Animal</code> is an abstract class with one abstract method <code>makeSound()</code> and one regular method <code>eat()</code>.</li>
    <li>The subclass <code>Dog</code> inherits <code>Animal</code> and provides an implementation for <code>makeSound()</code>.</li>
    <li>Using an object of <code>Dog</code>, both methods <code>makeSound()</code> and <code>eat()</code> are called.</li>
  </ul>

  <p><strong>Note:</strong> If the <code>Dog</code> class doesn't implement the <code>makeSound()</code> method, then <code>Dog</code> must also be declared as <code>abstract</code>.</p>

  <h2>Accessing Constructor of Abstract Classes</h2>
  <p>
    Just like a regular class, an abstract class can have constructors. These constructors can be accessed by a subclass using the <code>super</code> keyword.
  </p>

  <h3>Example: Accessing Abstract Class Constructor</h3>
  <div class="code-container">
    <pre class="code-block">abstract class Animal {
   Animal() {
      System.out.println("Animal constructor called.");
   }
}

class Dog extends Animal {
   Dog() {
      super();  // calls the constructor of Animal
      System.out.println("Dog constructor called.");
   }
}</pre>
  </div>

  <p>
    In this example:
  </p>
  <ul class="styled-box-output">
    <li>The constructor of <code>Animal</code> is executed first because we use <code>super()</code> in the <code>Dog</code> constructor.</li>
    <li><code>super()</code> must always be the first statement in the subclass constructor.</li>
  </ul>

  <p>
    For more details on <code>super</code>, visit: <a href="https://www.geeksforgeeks.org/super-keyword/" target="_blank">Java super keyword</a>
  </p>
</div>

<!---->
<div class="content-container">
  <h1>Java Abstraction</h1>

  <h2>What is Abstraction?</h2>
  <p>
    Abstraction is an important concept of object-oriented programming. It allows us to hide complex implementation details and show only the essential features of an object. This helps in reducing programming complexity and enhances code reusability.
  </p>

  <h3>Real-life Example of Abstraction</h3>
  <p>
    Consider the brakes of a motorbike. We know pressing the brake will stop the bike, but we do not know the internal workings of the brake system. This is abstraction — hiding internal details while exposing functionality.
  </p>

  <p>
    The benefit is that different bikes can have different brake mechanisms, but the behavior of braking remains consistent for the user.
  </p>

  <h2>Java Abstraction with Abstract Classes</h2>
  <p>
    Abstract classes and methods are primarily used to implement abstraction in Java.
  </p>

  <h3>Example: Abstraction using Abstract Class</h3>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">abstract class MotorBike {
  abstract void brake();
}

class SportsBike extends MotorBike {
    
  // implementation of abstract method
  public void brake() {
    System.out.println("SportsBike Brake");
  }
}

class MountainBike extends MotorBike {
    
  // implementation of abstract method
  public void brake() {
    System.out.println("MountainBike Brake");
  }
}

class Main {
  public static void main(String[] args) {
    MountainBike m1 = new MountainBike();
    m1.brake();
    SportsBike s1 = new SportsBike();
    s1.brake();
  }
}</pre>
  </div>

  <h3>Output:</h3>
  <div class="output-box">
    MountainBike Brake<br>
    SportsBike Brake
  </div>

  <h3>Explanation:</h3>
  <p>
    In this example:
  </p>
  <ul class="styled-box-output">
    <li><code>MotorBike</code> is an abstract superclass with an abstract method <code>brake()</code>.</li>
    <li><code>SportsBike</code> and <code>MountainBike</code> are subclasses that provide their own implementation of the <code>brake()</code> method.</li>
    <li>This shows how different bikes implement the same behavior in different ways, demonstrating abstraction.</li>
  </ul>

  <p><strong>Note:</strong> Abstract methods do not have a body and must be implemented by the subclass, unless the subclass is also declared abstract.</p>

  <h3>Additional Note:</h3>
  <p>
    We can also use interfaces to achieve abstraction in Java. To learn more, visit: 
    <a href="https://www.geeksforgeeks.org/interfaces-in-java/" target="_blank">Java Interface</a>
  </p>

  <h2>Key Points to Remember</h2>
  <ul class="styled-box-output">
    <li>Use the <code>abstract</code> keyword to declare abstract classes and methods.</li>
    <li>An abstract method does not have a method body.</li>
    <li>A class with at least one abstract method must be declared abstract.</li>
    <li>Objects cannot be created from an abstract class.</li>
    <li>Subclasses inherit abstract classes and must implement all abstract methods, unless the subclass is abstract.</li>
    <li>Static members of an abstract class can be accessed using the class name directly. Example:</li>
  </ul>

  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">Animal.staticMethod();</pre>
  </div>
</div>


<!--ending-->
    `
  },
   javaSuper: {
    id: "javaSuper",
    title: "",
    description: `
      <!--java super keyword-->

<div class="content-container">
  <h1>Java super Keyword</h1>

  <h2>What is <code>super</code> in Java?</h2>
  <p>
    The <code>super</code> keyword in Java is used in subclasses to access members (attributes, constructors, and methods) of the superclass.
  </p>

  <h3>Before You Begin:</h3>
  <p>Make sure you understand <a href="https://www.geeksforgeeks.org/inheritance-in-java/" target="_blank">Java Inheritance</a>.</p>

  <h2>Uses of <code>super</code> Keyword</h2>
  <ul class="styled-box-output">
    <li>To call a method of the superclass that has been overridden in the subclass.</li>
    <li>To access a field of the superclass if there is a field with the same name in the subclass.</li>
    <li>To call the constructor of the superclass from a subclass constructor.</li>
  </ul>

  <h2>1. Access Overridden Methods of the Superclass</h2>
  <p>
    If a method in the subclass has the same name as a method in the superclass, the subclass method overrides the superclass method. This is called method overriding.
  </p>

  <h3>Example 1: Method Overriding</h3>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">class Animal {

  // overridden method
  public void display(){
    System.out.println("I am an animal");
  }
}

class Dog extends Animal {

  // overriding method
  @Override
  public void display(){
    System.out.println("I am a dog");
  }

  public void printMessage(){
    display();
  }
}

class Main {
  public static void main(String[] args) {
    Dog dog1 = new Dog();
    dog1.printMessage();
  }
}</pre>
  </div>

  <h3>Output:</h3>
  <div class="output-box">
    I am a dog
  </div>

   <div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>
  <h3>Explanation:</h3>
  <p>
    In the above example:
    <ul class="styled-box-output">
      <li><code>display()</code> is defined in both the superclass (<code>Animal</code>) and subclass (<code>Dog</code>).</li>
      <li>The subclass version overrides the superclass version.</li>
      <li>When <code>dog1.printMessage()</code> is called, it executes <code>display()</code> from <code>Dog</code>.</li>
    </ul>
  </p>

  <h2>2. Calling Overridden Superclass Method using <code>super</code></h2>
  <p>
    To call the overridden method from the superclass, use <code>super.methodName()</code>.
  </p>

  <h3>Example 2: <code>super</code> to Call Superclass Method</h3>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">class Animal {

  // overridden method
  public void display(){
    System.out.println("I am an animal");
  }
}

class Dog extends Animal {

  // overriding method
  @Override
  public void display(){
    System.out.println("I am a dog");
  }

  public void printMessage(){

    // this calls overriding method
    display();

    // this calls overridden method
    super.display();
  }
}

class Main {
  public static void main(String[] args) {
    Dog dog1 = new Dog();
    dog1.printMessage();
  }
}</pre>
  </div>

  <h3>Output:</h3>
  <div class="output-box">
    I am a dog<br>
    I am an animal
  </div>
<div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>
  <h3>Explanation:</h3>
  <ul class="styled-box-output">
    <li><code>display()</code> inside <code>printMessage()</code> calls the overridden method from the subclass.</li>
    <li><code>super.display()</code> explicitly calls the method from the superclass.</li>
  </ul>

  <h2>Next:</h2>
  <p>
    You can also use <code>super</code> to call superclass constructors and access fields. These will be explained in the upcoming sections.
  </p>
</div>

<!---->

<div class="content-container">
  <h1>Java <code>super</code> Keyword: Access Attributes and Constructors</h1>

  <h2>2. Access Attributes of the Superclass</h2>
  <p>
    If the superclass and subclass have attributes with the same name, the <code>super</code> keyword can be used to access the attribute of the superclass.
  </p>

  <h3>Example 3: Access Superclass Attribute</h3>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">class Animal {
  protected String type = "animal";
}

class Dog extends Animal {
  public String type = "mammal";

  public void printType() {
    System.out.println("I am a " + type);
    System.out.println("I am an " + super.type);
  }
}

class Main {
  public static void main(String[] args) {
    Dog dog1 = new Dog();
    dog1.printType();
  }
}</pre>
  </div>

  <h3>Output:</h3>
  <div class="output-box">
    I am a mammal<br>
    I am an animal
  </div>
<div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>
  <h3>Explanation:</h3>
  <ul class="styled-box-output">
    <li><code>type</code> refers to the attribute in the subclass <code>Dog</code>.</li>
    <li><code>super.type</code> refers to the attribute in the superclass <code>Animal</code>.</li>
    <li>Hence, the first line prints <code>I am a mammal</code> and the second line prints <code>I am an animal</code>.</li>
  </ul>

  <h2>3. Use of <code>super()</code> to Access Superclass Constructor</h2>
  <p>
    The <code>super()</code> keyword is used to explicitly call the constructor of the superclass from the constructor of a subclass. This must be the first statement inside the constructor.
  </p>

  <h3>Example 4: Use of <code>super()</code></h3>
  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">class Animal {

  // default or no-arg constructor
  Animal() {
    System.out.println("I am an animal");
  }
}

class Dog extends Animal {

  // default or no-arg constructor
  Dog() {

    // calling superclass constructor
    super();

    System.out.println("I am a dog");
  }
}

class Main {
  public static void main(String[] args) {
    Dog dog1 = new Dog();
  }
}</pre>
  </div>

  <h3>Output:</h3>
  <div class="output-box">
    I am an animal<br>
    I am a dog
  </div>
<div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>
  <h3>Explanation:</h3>
  <ul class="styled-box-output">
    <li>When <code>Dog dog1 = new Dog()</code> is executed, the constructor of <code>Dog</code> is called.</li>
    <li>Inside the <code>Dog</code> constructor, <code>super()</code> calls the constructor of the <code>Animal</code> class.</li>
    <li>First, <code>I am an animal</code> is printed, then <code>I am a dog</code>.</li>
  </ul>

  <h3>Important Notes:</h3>
  <ul class="styled-box-output">
    <li>Using <code>super()</code> is optional if calling the default constructor. The compiler inserts it automatically.</li>
    <li><code>super()</code> is required if the superclass constructor has parameters (parameterized constructor).</li>
    <li><strong>Rule:</strong> A call to <code>super()</code> must be the first statement in the subclass constructor.</li>
  </ul>

  <h2>Conclusion</h2>
  <p>
    The <code>super</code> keyword is a powerful feature in Java that lets you interact with the parent class's members and constructors, especially in the context of inheritance and method overriding.
  </p>
</div>

<!---->

<div class="content-container">
  <h1>Java <code>super()</code> Keyword: Calling Parameterized Constructor</h1>

  <h2>Example 5: Call Parameterized Constructor Using <code>super()</code></h2>

  <p>
    In Java, the <code>super()</code> keyword can also be used to call a parameterized constructor of the superclass. This is necessary when the superclass doesn’t have a no-arg (default) constructor or you specifically want to initialize the superclass with parameters.
  </p>

  <div class="code-container">
    <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
    <pre class="code-block">class Animal {

  // default or no-arg constructor
  Animal() {
    System.out.println("I am an animal");
  }

  // parameterized constructor
  Animal(String type) {
    System.out.println("Type: " + type);
  }
}

class Dog extends Animal {

  // default constructor
  Dog() {

    // calling parameterized constructor of the superclass
    super("Animal");

    System.out.println("I am a dog");
  }
}

class Main {
  public static void main(String[] args) {
    Dog dog1 = new Dog();
  }
}</pre>
  </div>

  <h3>Output:</h3>
  <div class="output-box">
    Type: Animal<br>
    I am a dog
  </div>
<div class="try-code-cta">
  <p>
    <strong>Try this code online:</strong>
    <a href="https://www.jdoodle.com/online-java-compiler" target="_blank" rel="noopener noreferrer">
      Open in Java Compiler
    </a>
  </p>
</div>
  <h3>Explanation:</h3>
  <ul class="styled-box-output">
    <li>The <code>Animal</code> class has both a no-arg constructor and a parameterized constructor.</li>
    <li>The <code>Dog</code> constructor uses <code>super("Animal")</code> to explicitly call the parameterized constructor of the superclass.</li>
    <li>This prints <code>Type: Animal</code>, followed by <code>I am a dog</code>.</li>
    <li>The default constructor of <code>Animal</code> is not called because we specifically used the parameterized one.</li>
  </ul>
  <h3>Important Notes:</h3>
  <ul class="styled-box-output">
    <li>The compiler <strong>cannot automatically</strong> call a parameterized constructor. You must explicitly call it using <code>super(arguments)</code>.</li>
    <li><code>super(arguments)</code> must be the <strong>first statement</strong> in the subclass constructor.</li>
    <li>If you don’t explicitly call a constructor using <code>super()</code>, the compiler tries to insert a call to the no-arg constructor by default.</li>
  </ul>

  <h2>Conclusion</h2>
  <p>
    The use of <code>super()</code> with parameters allows subclasses to initialize inherited fields or perform specific actions by invoking a particular constructor of the superclass. It's a key concept in constructor chaining in Java.
  </p>
</div>



<!--ending-->
    `
  },

};
