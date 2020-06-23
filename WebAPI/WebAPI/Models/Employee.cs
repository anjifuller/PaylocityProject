using System;
using System.Collections.Generic;

namespace WebAPI.Models
{
    public class Employee : Person
    {
        public DateTime HireDate { get; set; }
        public decimal Salary { get; set; }
        public Address Address { get; set; }
        public Person Spouse { get; set; }
        public List<Person> Dependents { get; set; }
    }
}
