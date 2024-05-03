/* 
	Title : salary Calculation
	Author: Bharath
	Created Date: 02.04.2024
	Reviewed By:
	Reviewed Date:
	*/
public class salaryCalculation {
	
		int employee_Id;
		String name;
		String gender;
		String department;
		String designation;
		double grossSalary;

		public salaryCalculation(int employee_Id, String name, String gender, String department, String designation, double salary) {
			this.employee_Id = employee_Id;
			this.name = name;
			this.gender = gender;
			this.department = department;
			this.designation = designation;
			this.grossSalary = salary;
		}

		public double calculatesalary() {
			double  netSalary = ( grossSalary-((0.20*grossSalary)-(0.01*grossSalary)));
					return netSalary;

		}

		public void display() {
			System.out.println("Employee Details");
			System.out.println("Employee Id: " + employee_Id);
			System.out.println("Name: " + name);
			System.out.println("Gender: " + gender);
			System.out.println("Department: " + department);
			System.out.println("Designation: " + designation);
			System.out.println("netSalary: " + calculatesalary());
		}

		public static void main(String[] args) {
			salaryCalculation SalaryCalculation = new salaryCalculation(01, "Bharath", "Male", "FrontEnd", "Employee", 45000.00);
			salaryCalculation SalaryCalculation1 = new salaryCalculation(02, "Hari", "Male", "Development", "Employee", 25000.00);
			salaryCalculation SalaryCalculation2 = new salaryCalculation(03, "Hema", "female", "BackEnd", "Employee", 50000.00);

			SalaryCalculation.display();
			SalaryCalculation1.display();
			SalaryCalculation2.display();
			}
		}
