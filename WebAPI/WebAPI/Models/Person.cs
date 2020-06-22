using System;
using System.ComponentModel.DataAnnotations;

namespace Service.Models
{
    public class Person
    {
        public Guid Id { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        public string SSN { get; set; }
    }
}
