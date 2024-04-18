--strategy 1


repeat 

    function dobet1()
        basebet = 1
        nextbet = basebet

        if (win) then
            chance = 45
            nextbet = basebet
        else
            chance = 66
            nextbet = previousbet + (previousbet * 2)
        end
    end

until (currentstreak == -2)
-- strategy 2

while (currentstreak > -2) do

    function dobet2()
        basebet = 0.5
        nextbet = basebet

        if (win) then
            chance = 50
            nextbet = basebet
        else
            chance = 70
            nextbet = previousbet + (previousbet * 3)
        end
    end
end
