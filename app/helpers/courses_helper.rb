module CoursesHelper
  def getYearsArray
    years = [[(Date.today - 5.years).year, (Date.today - 5.years).year],
            [(Date.today - 4.years).year, (Date.today - 4.years).year],
            [(Date.today - 3.years).year, (Date.today - 3.years).year],
            [(Date.today - 2.years).year, (Date.today - 2.years).year],
            [(Date.today - 1.years).year, (Date.today - 1.years).year],
            [Date.today.year, Date.today.year],
            [(Date.today + 1.years).year, (Date.today + 1.years).year],
            [(Date.today + 2.years).year, (Date.today + 2.years).year],
            [(Date.today + 3.years).year, (Date.today + 3.years).year],
            [(Date.today + 4.years).year, (Date.today + 4.years).year],
            [(Date.today + 5.years).year, (Date.today + 5.years).year],
            [(Date.today + 6.years).year, (Date.today + 6.years).year]]
  end

  def getTermsArray
    terms = [["Fall", "Fall"],
            ["Winter", "Winter"],
            ["Spring", "Spring"],
            ["Summer", "Summer"]]
  end

end
