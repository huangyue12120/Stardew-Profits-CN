 
# 事先声明
由于英语看不习惯，所以我将[Thorinair](https://github.com/Thorinair)的[利润计算器](https://github.com/Thorinair/Stardew-Profits)做了简单的中文本地化。仅用作个人使用，侵删。

# Declaration
As I am not used to reading English, I have localized Thorinair's [Profit Calculator](https://thorinair.github.io/Stardew-Profits/) into simple Chinese. For personal use only, delete if necessary.

# 星露谷物语利润计算器
利润计算器是一个计算和绘图工具，旨在帮助游戏 “星露谷物语” 的玩家轻松地计算和比较他们在不同条件下种植不同作物的利润。

# 用法
该工具分为两个部分：图形框和选项框。选项框允许用户快速更改参数，然后在图形上反映出来。

### 图形框
图形框根据用户设置的选项显示实时渲染的图形。条形的数量会根据设定的条件(如不同的季节)而变化。黄金的利润可以从侧面看作是一种规模。这张图表同时显示了利润和亏损。此外，如果选择了种子购买损失，则损失将以橙色显示，如果选择了化肥购买损失，则损失将以棕色显示。将鼠标悬停在作物上，将显示一个工具提示，其中包含有关利润，损失等信息。按下作物将打开该作物的官方Wiki页面。

### 选项框
下表描述了所有选项以及它们如何影响图形。

选项 | 描述
--- | ---
季节 | 改变作物的季节。这将影响图表中显示的作物列表，因为只有某些作物在特定季节生长。此外，所有季节都有最多28天的计算限制。*温室*的季节季节没有这样的限制，显示所有作物，并允许长达10万天。
天数 | 指定用于计算的天数。持续时间越短，作物的生长时间就越少。如果设置的值过低，某些作物甚至可能没有时间生长一次。
当前日期 | 所选季节内的当前日期。该值从前面的“天数”中减去，以计算作物有多少天的生长时间。这几乎与“天数”相同，但不是指定剩余多少天，而是为了方便，您可以输入当前的游戏日期。
跨季节 | 如果选中此项，则计算将考虑到在季节更改时不会死亡的作物。
产品类型 | 指定在收获后要出售的产品类型。默认情况下，所有作物都会被收获并作为原材料出售。此选项考虑了普通/银/金比例、*耕种* 技能等级以及一些附加技能。其他选项允许您选择两种不同的加工方式
作物数量 | 这控制了玩家种植的作物数量。
最大种子资金 | 玩家储蓄中可用的最大资金。这将限制在购买种子时可以种植的作物数量。
平均利润 | 勾选此选项后，将只计算每天的平均利润。平均值是通过之前设置的天数计算得出的。
种子来源 | 种子可以从不同来源处获得，不同的来源也总是有不同的成本价格。此选项允许您选择图表应查找哪些来源。请注意，图表上始终会显示最便宜的选项。取消勾选某些选项可能会隐藏不再可获得的作物。
是否购买种子 | 选择这一选项意味着玩家将从其中一个来源购买种子，而不是自己生产种子（例如使用*种子生产器*）。每一种作物都会显示一个橙色条，显示选择后的种子损失情况。
肥料 | 不同的肥料可以加速生长或者增加普通/银/金比例。肥料的种类可以在这里选择。
是否购买肥料 | 选择这一选项意味着玩家将从其中一个来源购买肥料，而不是自己生产肥料(如制造)。每一种作物都会显示一个棕色的条形图，显示选择后的肥料损失情况。
耕种等级 | 玩家的 *耕种* 技能等级。这对农作物的普通/银/金比例有直接影响，但对工匠物品没有影响。
5级技能 | 玩家达到 *耕种* 技能达到5级时，可以使用*农耕人*技能。除非当前技能等级设置正确，否则这一选项是禁用的。
10级技能 | 当玩家 *耕种* 技能达到10级时，可以获得特定技能。除非当前技能等级设置正确并且5级技能选择了*农耕人*，否则这一选项是禁用的。
显示额外信息 | 勾选后将在鼠标移动到图表中的作物上时显示关于每个作物的额外详细信息。

# 联系方式
你可以通过以下方式与作者联系： [Twitter](https://twitter.com/thorinair_music) | [Reddit](https://www.reddit.com/user/Thorinair/) | [YouTube](https://www.youtube.com/user/Thorinair) | [deviantArt](http://thorinair.deviantart.com/)
